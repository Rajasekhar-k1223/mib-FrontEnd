import React, { useCallback, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSocket } from "./context/SocketProvider";
export default function GetCallRequest({ data }) {
  const navigate = useNavigate();
  const socket = useSocket();
  console.log(data);
  console.log(socket);
  //const socket = data.socket;
  const Accepted = (data) => {
    console.log(data);
    socket.emit("room:join", {
      from: data.to,
      to: data.from,
      roomId: data.roomId,
    });
  };
  const handleRoomJoined = useCallback(
    ({ roomId }) => {
      console.log(data);
      //    socket.emit("join-room",{emailId:email,roomId})
      navigate(`/room/${data.roomId}`);
    },
    [navigate]
  );
  const handleJoinRoom = ({ roomId }) => {
    socket.emit("join-room", { emailId: data.email, roomId });
  };
  useEffect(() => {
    socket.on("room:join", handleRoomJoined);
    return () => {
      socket.off("room:join", handleRoomJoined);
    };
  }, [handleRoomJoined, socket]);
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
          Accepted(data);
        }}
      >
        Accept
      </div>
      <div className="callRejectedBtn">Reject</div>
    </div>
  );
}
