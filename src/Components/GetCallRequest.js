import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
export default function GetCallRequest({ data,socket }) {
  console.log(data)
  console.log(socket)
  //const socket = data.socket;
  const Accepted = (userData,userId) => {
      console.log(userData);
      console.log(userId)
    socket.emit("callAccepted",{ userData,userId });
  };
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
          Accepted(data.username,data.userId);
        }}
      >
        Accept
      </div>
      <div className="callRejectedBtn">Reject</div>
    </div>
  );
}
