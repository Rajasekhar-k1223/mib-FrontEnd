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
function CalltoScreen({socket, callAccept, data }) {
    // const navigation = useNavigate();
    console.log(data)
    const [CallingSysten, setCallingSysten] = useState(true);
    const [AcceptCall, setAcceptCall] = useState(false);
    const [addUserView, setaddUserView] = useState(false);
    const [mute, setmute] = useState(true);
    const [me, setMe] = useState("");
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [CallerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const [idToCall, setIdToCall] = useState("");
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();
    useEffect(async () => {
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: true })
          .then((stream) => {
            setStream(stream);
            myVideo.current.srcObject = stream;
          });
    
        // socket.on("RequestUser", (id) => {
        //   setMe(id);
        // });
        console.log(callAccept)
        await checkData(data)
        callAccept === true ? await answerCall(data) : callfriend(data.userData.userId)
     
        //callfriend(data.userData.userId);
     
  
        // socket.on("callUser", (data) => {
        //   alert(data)
        //   setReceivingCall(true);
        //   setCaller(35);
        //   setName(data.name);
        //   setCallerSignal(data.signal);
        // });
      }, [CallerSignal]);
      const checkData = async(data)=>{
        alert("hello");
        console.log(data)
        alert(data)
        setReceivingCall(callAccept);
        setCaller(data.from);
        setName(data.name);
        console.log(data.signal)
        setCallerSignal(data.signal);
        console.log(CallerSignal)
        
      }
    const callfriend = (id) => {
        //let socket = io(ip_address + ":" + socket_port);
        // socket.emit("sendChatToServer", text);
        // console.log(text);
        // console.log(socket);
        // console.log(socket.id);
        console.log(id);
        // socket.emit("JoinServer", id);
        // console.log(socket);
        // callUser(socket.id);
      };
      const callUser = (id) => {
        console.log(id);
        // const peer = new Peer({
        //   initiator: true,
        //   trickle: false,
        //   stream: stream,
        // });
        // peer.on("signal", (data) => {
        //   socket.emit("callUser", {
        //     userToCall: id,
        //     signalData: data,
        //     from: me,
        //     name: name,
        //   });
        // });
        // peer.on("stream", (stream) => {
        //   userVideo.current.srcObject = stream;
        // });
        // socket.on("callAccepted", (signal) => {
        //   setCallAccepted(true);
        //   peer.signal(signal);
        // });
    
        // connectionRef.current = peer;
      };
    
      const answerCall = async(data) => {
        console.log("Accepted")
        setCallAccepted(true);
        const peer1 = new Peer({
          initiator: true,
          trickle: false,
          stream: stream,
        });
        console.log(data)
        const callerName = data.from
        // const peer1 = new Peer();
        console.log(peer1);

        peer1.on("signal", (dataN) => {
          console.log(data);
          console.log(callerName)
          socket.emit("answerCall", { signal: data.sin, to: callerName });
          socket.on("callAccepted", (signal) => {
            setCallAccepted(true);
            peer1.signal(signal);
          });
        });
        peer1.on("stream", (stream) => {
          userVideo.current.srcObject = stream;
        });
    console.log(userVideo)
        console.log(CallerSignal)
        peer1.signal(CallerSignal);
        connectionRef.current = peer1;
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
