import React from "react";
import FriendsList from "./FriendsList";
import Header from "./Header";

export default function Settings() {
  return (
    <div>
      <div>
        <Header />
        <div className="MainSection">
          <div className="FeedsSections">{/* <Feeds /> */}</div>
          <div className="friendsListSection">
            <FriendsList />
          </div>
        </div>
      </div>
    </div>
  );
}
