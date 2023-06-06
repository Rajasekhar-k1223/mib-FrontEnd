import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
export default function GetCallRequest({ data,socket }) {
  console.log(data)
  console.log(socket)
  //const socket = data.socket;
  const Accepted = (userData) => {
    socket.emit("callAccepted",userData);
  };
  return (
    <div className="notificationfor_call">
      <AiFillCloseCircle className="notifi_close" />
      {/* <div className="getNotification_frd_request">
        {data.senderName}
        <p>{data.type}</p>
      </div> */}
      <div className="notification_call_user">R</div>
      <div
        className="callAcceptBtn"
        onClick={() => {
          Accepted(data.user);
        }}
      >
        Accept
      </div>
      <div className="callRejectedBtn">Reject</div>
    </div>
  );
}
