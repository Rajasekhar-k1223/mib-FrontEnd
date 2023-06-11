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
function CalltoScreen({socket, callAccept, data }) {
    // const navigation = useNavigate();
    const [CallingSysten, setCallingSysten] = useState(true);
    const [AcceptCall, setAcceptCall] = useState(false);
    const [addUserView, setaddUserView] = useState(false);
    const [mute, setmute] = useState(true);
    const [me, setMe] = useState("");
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
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
        callAccept === true ? answerCall() : callfriend(data.userData.userId)
        //callfriend(data.userData.userId);
    
        socket.on("callUser", (data) => {
          setReceivingCall(true);
          setCaller(data.from);
          setName(data.name);
          setCallerSignal(data.signal);
        });
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
        callUser(socket.id);
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
  return (              <div
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
    </div>
  )
}
export default CalltoScreen;
