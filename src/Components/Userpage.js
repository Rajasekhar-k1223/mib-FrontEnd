import React, { useState } from "react";
import Feeds from "./feeds/Feeds";
import FriendsList from "./friends/FriendsList";
import FriendListCheck from "./friends/FriendListCheck";
import Header from "./Header";
import { io } from "socket.io-client";
import { config } from "../Config";
import BlurOptions from "./BlurOptions";
export default function Userpage({ socket }) {
  // console.log("userpage");
  // console.log(socket);
  const [Dragable, setDragable] = useState("pointer");
  const [bluroption,setbluroption] = useState(false)
  const changingHeaderDragble = () => {
    setDragable("all-scroll");
  };
  // let ip_address = config.socketIp;
  // let socket_port = config.socket;
  // let socket = io(ip_address + ":" + socket_port);
  // console.log("userpage");


    const bluroptions = (blrvalue) => {
      setbluroption(blrvalue);
    }
  return (
    <div>
      <Header
        socket={socket}
        // changingHeaderDragble={changingHeaderDragble}
        // style={{ cursor: Dragable }}
      />
      <div className="MainSection">
        <div className="FeedsSections">
          <Feeds bluroptions={bluroptions} />
        </div>
        <div className="friendsListSection">
          <FriendsList socket={socket}/>
          {/* <FriendListCheck /> */}
        </div>
      </div>
      {/* {bluroption === true ? <BlurOptions />:null} */}
    </div>
  );
}
