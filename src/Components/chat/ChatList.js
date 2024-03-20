import React, { useState, useEffect } from "react";
import FriendsList from "../friends/FriendsList";
import Header from "../Header";
import image from "../../assets/images/avatar.png";
import { BiDotsVerticalRounded } from "react-icons/bi";
import GroupsIcon from "@mui/icons-material/Groups";
import TextsmsIcon from "@mui/icons-material/Textsms";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import tickView from "../../assets/images/tickview.png";
import ticknotView from "../../assets/images/ticknotview.png";
import CallIcon from "@mui/icons-material/Call";
import InputEmoji from "react-input-emoji";
export default function ChatList() {
  const [viewMsg, setviewMsg] = useState(false);
  const [text, setText] = useState("");
  const handleOnEnter = (text, fridId) => {
    //console.log(messageList);
    // let ip_address = config.socketIp;
    // let socket_port = config.socket;
    // let socket = io(ip_address + ":" + socket_port);
    // socket.emit("sendChatToServer", text);
    console.log(text);
    // console.log(socket);
    // console.log(socket.id);
  }
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <div
        className="chatSystemICons"
        style={{
          width: "5%",
          minHeight: "95vh",
          maxHeight: "95vh",
          overflowY: "auto",
          position: "absolute",
          top: "3rem",
          padding: "0.4rem",
          textAlign: "center",
          background: "azure",
          boxShadow: "0px 0px 3px black inset",
        }}
      >
        <div style={{ height: 20, width: "100%" }}></div>
        <icons>
        <GroupsIcon sx={{ width: "50px", height: "40px" }} />
        </icons>
        <icons>
        <TextsmsIcon sx={{ width: "50px", height: "40px" }} />
        </icons>
        
      </div>
      <div
        style={{
          width: "20%",
          minHeight: "95vh",
          maxHeight: "95vh",
          overflowY: "auto",
          bosShadow: "0px 0px 5px #c9c9c9",
          position: "absolute",
          top: "3rem",
          paddingTop: "0.7rem",
          left: "5%",
          background: "rgba(97, 218, 251, 0.05)",
          boxShadow: "0px 0px 5px #c1c1c1 inset",
        }}
      >
        <div
          className="friendListView"
          style={{ borderBottom: "3px double #000" }}
        >
          <strong>Charts</strong>
        </div>
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
          width: "75%",
          right: 0,
          minHeight: "95vh",
          maxHeight: "95vh",
          overflowY: "auto",
          position: "absolute",
          top: "3rem",
          paddingTop: "0.7rem",
          background: "#80808005",
          boxShadow: "0px 0xp 5px gray inset",
        }}
      >
        <div className="messanger">
          <span>
            <img src={image} />
            <p>Rajasekhar</p>
          </span>
          <icons>
            <CallIcon sx={{ mr: 1.5 }} />
            <VideoChatIcon sx={{ mr: 1.5 }} />
            <MoreVertIcon />
          </icons>
        </div>
        <div
          style={{
            width: "100%",
            minHeight: "80vh",
            maxHeight: "80vh",
            overflowY: "auto",
            paddingBottom: "1rem",
          }}
        >
          <div className="replay">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              {/* <icon>
                <BiDotsVerticalRounded
                  className="minicon"
                  size={16}
                  onClick={() => {}}
                />
              </icon>
              <h6>06-12-2022 4pm</h6> */}
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
              <div
                style={{
                  padding: "0.3rem",
                  paddingBottom: "0rem",
                  fontWeight: "600",
                  fontSize: "10px",
                }}
              >
                06-12-2022 4pm{" "}
                {viewMsg ? (
                  <img
                    src={tickView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                ) : (
                  <img
                    src={ticknotView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                )}
              </div>
            </p>
          </div>
          <div className="replay">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              {/* <icon>
                <BiDotsVerticalRounded
                  className="minicon"
                  size={16}
                  onClick={() => {}}
                />
              </icon>
              <h6>06-12-2022 4pm</h6> */}
              Lorem Ipsum
              <div
                style={{
                  padding: "0.3rem",
                  paddingBottom: "0rem",
                  fontWeight: "600",
                  fontSize: "10px",
                }}
              >
                06-12-2022 4pm{" "}
                {viewMsg ? (
                  <img
                    src={tickView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                ) : (
                  <img
                    src={ticknotView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                )}
              </div>
            </p>
          </div>
          <div className="replay">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              {/* <icon>
                <BiDotsVerticalRounded
                  className="minicon"
                  size={16}
                  onClick={() => {}}
                />
              </icon>
              <h6>06-12-2022 4pm</h6> */}
              hi
              <div
                style={{
                  padding: "0.3rem",
                  paddingBottom: "0rem",
                  fontWeight: "600",
                  fontSize: "10px",
                }}
              >
                06-12-2022 4pm{" "}
                {viewMsg ? (
                  <img
                    src={tickView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                ) : (
                  <img
                    src={ticknotView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                )}
              </div>
            </p>
          </div>
          <div className="replay">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              {/* <icon>
                <BiDotsVerticalRounded className="minicon" size={16} />
              </icon>
              <h6>06-12-2022 4pm</h6> */}
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
              <div
                style={{
                  padding: "0.3rem",
                  paddingBottom: "0rem",
                  fontWeight: "600",
                  fontSize: "10px",
                }}
              >
                06-12-2022 4pm{" "}
                {viewMsg ? (
                  <img
                    src={tickView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                ) : (
                  <img
                    src={ticknotView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                )}
              </div>
            </p>
          </div>
          <div className="replay">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              {/* <icon>
                <BiDotsVerticalRounded className="minicon" size={16} />
              </icon>
              <h6>06-12-2022 4pm</h6> */}
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
              <div
                style={{
                  padding: "0.3rem",
                  paddingBottom: "0rem",
                  fontWeight: "600",
                  fontSize: "10px",
                }}
              >
                06-12-2022 4pm{" "}
                {viewMsg ? (
                  <img
                    src={tickView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                ) : (
                  <img
                    src={ticknotView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                )}
              </div>
            </p>
          </div>
          <div className="recived">
            <span>
              <img src={image} style={{ width: "25px", height: "25px" }} />{" "}
            </span>
            <p>
              {/* <h6>06-12-2022 4pm</h6>
              <icon>
                <BiDotsVerticalRounded className="minicon" size={16} />
              </icon> */}
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
              <div
                style={{
                  padding: "0.3rem",
                  paddingBottom: "0rem",
                  fontWeight: "600",
                  fontSize: "10px",
                }}
              >
                06-12-2022 4pm{" "}
                {viewMsg ? (
                  <img
                    src={tickView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                ) : (
                  <img
                    src={ticknotView}
                    style={{ width: "16px", position: "relative", top: "5px" }}
                  />
                )}
              </div>
            </p>
          </div>
        </div>
        <div
          className="messageBox"
          contentEditable="true"
          placeholder="Type something..."
        >
           <InputEmoji
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={() => {
                handleOnEnter(text, '10');
              }}
              fontSize="12px"
              placeholder="Type a message"
            />
        </div>
      </div>
    </div>
  );
}
