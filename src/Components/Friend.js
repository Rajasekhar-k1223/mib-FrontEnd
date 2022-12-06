import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Base64 } from "js-base64";
import Header from "./Header";
import FriendsList from "./FriendsList";
import FriendView from "./FriendView";
export default function Friend() {
  const navigation = useNavigate();
  const uselocation = useLocation().search;
  const name = new URLSearchParams(uselocation).get("name");
  const userData = Base64.decode(Base64.decode(name));

  return (
    <>
      <Header />
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
          <FriendView userIdData={userData} />
        </div>
        <div className="friendsListSection">
          <FriendsList />
        </div>
      </div>
    </>
  );
}
