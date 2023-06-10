import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import { useNavigate } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Accept from "../assets/images/Accept_1.gif";
import Rejected from "../assets/images/Rejected_1.gif";
import RingTone from "../assets/audio/beam_me_up.mp3";
import { Navigation } from "@mui/icons-material";
import { FaUserPlus } from "react-icons/fa";
import { BsRecordCircleFill } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import { BsMicMuteFill } from "react-icons/bs";
import { BiPhoneOff } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
function CallConnected({ socket, callAccept, data }) {
  console.log(data);
  const [CallingSysten, setCallingSysten] = useState(true);
  const [AcceptCall, setAcceptCall] = useState(false);
  const [addUserView, setaddUserView] = useState(false);
  const [mute, setmute] = useState(true);
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(callAccept);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    // socket.on("RequestUser", (id) => {
    //   setMe(id);
    // });
    callAccept === true ? callfriend(data.userData.userId) : notstart();

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
    setCallAccepted(callAccept);
  }, [socket]);
  const callfriend = (id) => {
    //let socket = io(ip_address + ":" + socket_port);
    // socket.emit("sendChatToServer", text);
    // console.log(text);
    console.log(socket);
    console.log(socket.Socket);
    console.log(id);
    socket.emit("JoinServer", id);
    console.log(socket);
    callUser(socket.id);
  };
  const notstart = () => {
    console.log(AcceptCall);
  };
  const callUser = (id) => {
    console.log(id);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };
  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };
  return (
    <div style={{ position: "relative", zIndex: 9999 }}>
      {/* <ReactAudioPlayer
        src={RingTone}
        autoPlay
        controls
        // onPause={Pause}
        // onPlay={true}
      /> */}
      {/* {CallingSysten ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            background: "#030E3E",
            zIndex: 99999,
            left: 0,
            top: 0,
          }}
        > */}
      {/* <Button
          onClick={() => {
            setPause(false);
          }}
        >
          Pause
        </Button> */}
      {/* <div className="CallingUserNameICon">Raja</div>
          <div className="CallingControlsICons">
            {AcceptCall ? (
              <div>
                {mute ? (
                  <BsMicMuteFill
                    size={25}
                    style={{ color: "red", margin: 5, padding: "0.5rem" }}
                    onClick={() => {
                      setmute(false);
                    }}
                  />
                ) : (
                  <BsMicFill
                    size={25}
                    style={{ color: "blue", margin: 5, padding: "0.5rem" }}
                    onClick={() => {
                      setmute(true);
                    }}
                  />
                )}
                <FaUserPlus
                  size={25}
                  style={{ color: "#fff", margin: 5, padding: "0.5rem" }}
                  onClick={() => {
                    setaddUserView(true);
                  }}
                />
                <BsRecordCircleFill
                  size={25}
                  style={{ color: "#fff", margin: 5, padding: "0.5rem" }}
                />
                <FiShare
                  size={25}
                  style={{ color: "#fff", margin: 5, padding: "0.5rem" }}
                />
                <BiPhoneOff
                  size={25}
                  style={{
                    color: "#fff",
                    background: "red",
                    borderRadius: "5rem",
                    padding: "0.5rem",
                    margin: 5,
                  }}
                  onClick={() => {
                    setAcceptCall(false);
                    navigation("/userpage");
                  }}
                />
                <BiDotsVerticalRounded
                  size={25}
                  style={{ color: "#fff", margin: 5, padding: "0.5rem" }}
                />
              </div>
            ) : (
              <div>
                <img
                  src={Accept}
                  className="acceptCall"
                  onClick={() => {
                    setAcceptCall(true);
                  }}
                />
                <img
                  src={Rejected}
                  className="rejectedCall"
                  onClick={() => {
                    navigation("/userpage");
                  }}
                />
              </div>
            )}
          </div>
          {addUserView ? (
            <div
              style={{
                position: "fixed",
                width: "15rem",
                height: "100vh",
                background: "#fff",
                top: 0,
                right: 0,
              }}
            >
              <div
                className=""
                style={{
                  width: 15,
                  float: "right",
                  cursor: "pointer",
                  margin: 5,
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setaddUserView(false);
                }}
              >
                X
              </div>
              <div style={{ clear: "both" }}></div>
              <input />
            </div>
          ) : null}
        </div>
      ) : null} */}
      <>
        {/* <h1 style={{ textAlign: "center", color: "#fff" }}>Zoomish</h1> */}
        <div
          className="container"
          style={{ overflow: "hidden", background: "#000" }}
        >
          <div className="video-containercall">
            <div className="video">
              {stream && (
                <video
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                  // style={{ width: "100vw", height: "100vh" }}
                />
              )}
            </div>
            <div className="video">
              {/* {callAccepted && !callEnded ? ( */}
              {console.log(callAccepted)}
              {callAccepted ? (
                <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  style={{ width: "300px" }}
                />
              ) : null}
            </div>
          </div>
          <div className="rejected_icon">
            <img src={Rejected} />
          </div>
          {/* <div className="myId">
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "20px" }}
            />
            <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AssignmentIcon fontSize="large" />}
              >
                Copy ID
              </Button>
            </CopyToClipboard>

            <TextField
              id="filled-basic"
              label="ID to call"
              variant="filled"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            <div className="call-button">
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={leaveCall}
                >
                  End Call
                </Button>
              ) : (
                <IconButton
                  color="primary"
                  aria-label="call"
                  onClick={() => callUser(idToCall)}
                >
                  <LocalPhoneIcon fontSize="large" />
                </IconButton>
              )}
              {idToCall}
            </div>
          </div> */}
          {/* <div>
            {receivingCall && !callAccepted ? (
              <div className="caller">
                <h1>{name} is calling...</h1>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={answerCall}
                >
                  Answer
                </Button>
              </div>
            ) : null}
          </div> */}
        </div>
      </>
    </div>
  );
}

export default CallConnected;
