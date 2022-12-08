import React from "react";
import FriendsList from "./FriendsList";
import Header from "./Header";
import image from "../assets/images/avatar.png";
import { BiDotsVerticalRounded } from "react-icons/bi";
import GroupsIcon from "@mui/icons-material/Groups";
import TextsmsIcon from "@mui/icons-material/Textsms";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function ChatList() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <div
        style={{
          width: "3%",
          minHeight: "92.3vh",
          maxHeight: "92.3vh",
          overflowY: "auto",
          borderRight: "1px solid #000",
          position: "absolute",
          top: "3rem",
          paddingTop: "0.7rem",
        }}
      >
        <GroupsIcon />
        <TextsmsIcon />
      </div>
      <div
        style={{
          width: "17%",
          minHeight: "92.3vh",
          maxHeight: "92.3vh",
          overflowY: "auto",
          bosShadow: "0px 0px 5px #c9c9c9",
          position: "absolute",
          top: "3rem",
          paddingTop: "0.7rem",
          left: "3%",
        }}
      >
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
        <div className="friendListView">Rajasekhar</div>
      </div>
      <div
        style={{
          width: "80%",
          right: 0,
          minHeight: "92.3vh",
          maxHeight: "92.3vh",
          overflowY: "auto",
          borderRight: "1px solid #000",
          position: "absolute",
          top: "3rem",
          paddingTop: "0.7rem",
        }}
      >
        <div className="messanger">
          <span>
            <img src={image} />
            Rajasekhar
          </span>
          <icons>
            <VideoChatIcon />
            <MoreVertIcon />
          </icons>
        </div>
        <div
          style={{
            width: "100%",
            minHeight: "75.3vh",
            maxHeight: "75.3vh",
            overflowY: "auto",
            paddingBottom: "1rem",
          }}
        >
          <div className="replay">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              <icon>
                <BiDotsVerticalRounded
                  className="minicon"
                  size={16}
                  onClick={() => {}}
                />
              </icon>
              <h6>06-12-2022 4pm</h6>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
          </div>
          <div className="replay">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              <icon>
                <BiDotsVerticalRounded
                  className="minicon"
                  size={16}
                  onClick={() => {}}
                />
              </icon>
              <h6>06-12-2022 4pm</h6>
              Lorem Ipsum
            </p>
          </div>
          <div className="replay">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              <icon>
                <BiDotsVerticalRounded
                  className="minicon"
                  size={16}
                  onClick={() => {}}
                />
              </icon>
              <h6>06-12-2022 4pm</h6>
              hi
            </p>
          </div>
          <div className="replay">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              <icon>
                <BiDotsVerticalRounded className="minicon" size={16} />
              </icon>
              <h6>06-12-2022 4pm</h6>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
          </div>
          <div className="replay">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              <icon>
                <BiDotsVerticalRounded className="minicon" size={16} />
              </icon>
              <h6>06-12-2022 4pm</h6>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
          </div>
          <div className="recived">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              <h6>06-12-2022 4pm</h6>
              <icon>
                <BiDotsVerticalRounded className="minicon" size={16} />
              </icon>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
          </div>
        </div>
        <div
          className="messageBox"
          contentEditable="true"
          placeholder="Type something..."
        ></div>
      </div>
    </div>
  );
}
