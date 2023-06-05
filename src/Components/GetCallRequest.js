import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
export default function componentName({ data }) {
  const socket = data.socket;
  const Accepted = () => {
    socket.emit();
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
          Accepted();
        }}
      >
        Accept
      </div>
      <div className="callRejectedBtn">Reject</div>
    </div>
  );
}
