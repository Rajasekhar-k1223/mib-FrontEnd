import React from 'react'

export default function GetCallRequestFrom({ data,socket }) {
    const Reject = (userData) => {
        socket.emit("callRejected",userData);
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
          Reject(data.user);
        }}
      >
        Reject
      </div>
    </div>
  )
}
