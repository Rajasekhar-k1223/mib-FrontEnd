import React,{useRef,useState,useEffect} from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import Peer from "simple-peer";
import CallConnected from './CallConnected';
export default function GetCallRequestFrom({ data,socket }) {
 
  const [accepted, setaccepted] = useState(false)
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  const [stream, setStream] = useState();


    const Reject = (userData) => {
        socket.emit("callRejected",userData);
        socket.on("callAcceptedresSender",(response)=>{
          alert(response)
        })
      };
  return (
    <div className="notificationform_call">
    {/* <div style={{position:"fixed",zIndex:9999}}> */}
      <AiFillCloseCircle className="notifi_close" />
      {/* <div className="getNotification_frd_request">
        {data.senderName}
        <p>{data.type}</p>
      </div> */}
      {/* <div className="notification_call_user">R</div> */}
      <CallConnected socket={socket} callAccept={accepted}/>
      {/* <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  style={{ width: "300px" }}
                /> */}
      <div>Calling......</div>
      <div
        className="callAcceptBtn"
        onClick={() => {
          Reject(data.user);
        }}
      >
        Reject
      </div>
    </div>
  )
}
