import React,{useCallback,useEffect} from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function GetCallRequest({ data, socket }) {
  const navigate = useNavigate();
  console.log(data);
  console.log(socket);
  //const socket = data.socket;
  const Accepted = (userData, userId) => {
    console.log(userData);
    console.log(userId);
    socket.emit("Accept-Room", { userData, userId });
  };
  const handleRoomJoined = useCallback(({roomId}) =>{
    console.log(data)
    //    socket.emit("join-room",{emailId:email,roomId})
       navigate(`/room/${data.roomId}`)
    },[navigate])
    const handleJoinRoom = ({roomId}) =>{
        socket.emit("join-room",{emailId:data.email,roomId})
     }
     useEffect(()=>{
      socket.on("joined-room",handleRoomJoined);
      return ()=>{
          socket.off("joined-room",handleRoomJoined);
      }
  },[handleRoomJoined,socket]);
  return (
    <div className="notificationfor_call">
      <AiFillCloseCircle className="notifi_close" />
      {/* <div className="getNotification_frd_request">
        {data.senderName}
        <p>{data.type}</p>
      </div> */}
      <div className="notification_call_user">R</div>
      <div>Incoming call......</div>
      <div
        className="callAcceptBtn"
        onClick={() => {
          Accepted(data.userData, data.userId);
        }}
      >
        Accept
      </div>
      <div className="callRejectedBtn">Reject</div>
    </div>
  );
}
