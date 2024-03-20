import React, { useEffect, useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Accept from "../../assets/images/Accept_1.gif";
import Rejected from "../../assets/images/Rejected_1.gif";
import RingTone from "../../assets/audio/beam_me_up.mp3";
import { Navigation } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
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
import { useLocation } from "react-router-dom";
// import Peer, { config } from "simple-peer";
import Peer from "simple-peer";
import io from "socket.io-client";
import { config } from "../../Config";
// const socket = io.connect("http://localhost" + config.socket + "");
export default function CallFromScreen({socket, callAccept, data }) {
  // const location = useLocation();
  // const { userData } = 32

  // const navigation = useNavigate();
  const loginuser = localStorage.getItem("userId");
  const loginuserName = localStorage.getItem("userName");
  const [CallingSysten, setCallingSysten] = useState(true);
  const [AcceptCall, setAcceptCall] = useState(false);
  const [addUserView, setaddUserView] = useState(false);
  const [mute, setmute] = useState(true);
  const [me, setMe] = useState(parseInt(loginuser));
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState(loginuserName);
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
      socket.on("callUser", (data) => {
        console.log(data)
        setReceivingCall(true);
        setCaller(data.from);
        setName(data.name);
        setCallerSignal(data.signal);
      });

    // socket.on("RequestUser", (id) => {
    //   setMe(id);
    // });
    console.log(data.userData.userId)
    console.log(data.userData)
    callAccept === true ? answerCall() : callfriend(data.userData.userId)
    //callfriend(userData);

 
  }, []);
  const callfriend = (id) => {
 
    //let socket = io(ip_address + ":" + socket_port);
    // socket.emit("sendChatToServer", text);
    // console.log(text);
    // console.log(socket);
    // console.log(socket.id);
    console.log(id);
    socket.emit("JoinServer", id);
    console.log(socket);
    callUser(id);
  };
  const callUser = (id) => {
    console.log(id);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    console.log(peer)
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on("stream", (stream) => {
      console.log(stream)
      userVideo.current.srcObject = stream;
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      console.log(signal)
      peer.signal(signal);
    });
console.log(peer)
    connectionRef.current = peer;
  };

  const answerCall = () => {
    // setCallAccepted(true);
    // const peer = new Peer({
    //   initiator: false,
    //   trickle: false,
    //   stream: stream,
    // });
    // peer.on("signal", (data) => {
    //   socket.emit("answerCall", { signal: data, to: caller });
    // });
    // peer.on("stream", (stream) => {
    //   userVideo.current.srcObject = stream;
    // });

    // peer.signal(callerSignal);
    // connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };
  return (
    <div>
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
          style={{ overflow: "hidden", background: "#000",position: "absolute",zIndex: 999999}}
        >
          <div className="video-containercall">
            <div className="video">
              {stream && (
                <video
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                  style={{ width: "100vw", height: "100vh" }}
                />
              )}
            </div>
            <div className="video">
              {callAccepted && !callEnded ? (
                <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  style={{ width: "300px" }}
                />
              ) : null}
            </div>
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
          <div>
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
          </div>
        </div>
      </>
    </div>
  );
}
