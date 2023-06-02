import React, { useState } from "react";
import Feeds from "./Feeds";
import FriendsList from "./FriendsList";
import Header from "./Header";
import { io } from "socket.io-client";
import { config } from "../Config";
export default function Userpage({ socket }) {
  console.log("userpage");
  console.log(socket);
  const [Dragable, setDragable] = useState("pointer");
  const changingHeaderDragble = () => {
    setDragable("all-scroll");
  };
  // let ip_address = config.socketIp;
  // let socket_port = config.socket;
  // let socket = io(ip_address + ":" + socket_port);
  console.log("userpage");
  return (
    <div>
      <Header
        socket={socket}
        // changingHeaderDragble={changingHeaderDragble}
        // style={{ cursor: Dragable }}
      />
      <div className="MainSection">
        <div className="FeedsSections">
          <Feeds />
        </div>
        <div className="friendsListSection">
          <FriendsList socket={socket}/>
        </div>
      </div>
    </div>
  );
}
