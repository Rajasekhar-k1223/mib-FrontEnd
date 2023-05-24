import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Base64 } from "js-base64";
import Header from "./Header";
import FriendsList from "./FriendsList";
import FriendView from "./FriendView";
export default function Friend({ socket }) {
  const [Dragable, setDragable] = useState("pointer");
  const changingHeaderDragble = () => {
    setDragable("all-scroll");
  };
  const navigation = useNavigate();
  const uselocation = useLocation().search;
  const name = new URLSearchParams(uselocation).get("name");
  const userData = Base64.decode(Base64.decode(name));
  console.log("Friend View");
  return (
    <>
      <Header
        socket={socket}
        // changingHeaderDragble={changingHeaderDragble}
        // style={{ cursor: Dragable }}
      />
      <div className="MainSection">
        <div
          style={{
            width: "85%",
            position: "absolute",
            top: "60px",
            height: "80vh",
            overflowY: "auto",
          }}
        >
          <FriendView userIdData={userData} socket={socket} />
        </div>
        <div className="friendsListSection">
          <FriendsList />
        </div>
      </div>
    </>
  );
}
