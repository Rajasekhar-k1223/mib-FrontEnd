import React, { useEffect, useState, useRef } from "react";
import BannerBack from "../assets/images/avatarbanner.jpg";
import Button from "@mui/material/Button";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Avatar from "../assets/images/preview.png";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { config } from "../Config";
import { io } from "socket.io-client";
export default function FriendView({ userIdData, socket }) {
  const userToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");

  const [coords, setCoords] = useState(0);
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  const [Opacity, setOpacity] = useState(1);
  const [session, setsession] = useState(false);
  const [FriendRequest, setFriendRequest] = useState(0);
  const [checkFriendRequest, setcheckFriendRequest] = useState([]);
  const [UserDetailsAfterGet, setUserDetailsAfterGet] = useState([]);
  const [ChangeMenu, setChangeMenu] = useState("about");
  const [hasBeenCalled, setHasBeenCalled] = useState(false);

  const [uploadBackgroundBannerFile, setuploadBackgroundBannerFile] =
    useState(0);
  const dragRef = useRef(null);
  const dragAreaRef = useRef(null);
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  const getUserDetails = async () => {
    const AccessDetailsUser = {
      headers: {
        Authorization: "Bearer " + userToken,
        // "Content-Type": "application/json",
      },
      params: {
        from: userIdData,
      },
    };
    const AccessDetailsUserCheck = {
      headers: {
        Authorization: "Bearer " + userToken,
        // "Content-Type": "application/json",
      },
      params: {
        from: userId,
        to: userIdData,
      },
    };
    //   console.log(AccessDetailsUser);
    await axios
      .get(`${config.url}/api/getFriendDetails`, AccessDetailsUser)
      .then((res) => {
        console.log(res.data);
        setUserDetailsAfterGet(res.data.data[0]);
      });
    await axios
      .get(`${config.url}/api/FriendRequestFromCheck`, AccessDetailsUserCheck)
      .then((res) => {
        console.log(res.data.data.length);
        setFriendRequest(res.data.data.length);
        const checkDAtList =
          res.data.data.length > 0 ? res.data.data[0] : res.data.data.length;
        console.log(checkDAtList);
        setcheckFriendRequest(...checkFriendRequest, checkDAtList);
      });
  };
  const drag = (event) => {
    const boundingBox = dragRef.current;

    const {
      left = 0,
      right = 0,
      top = 0,
      bottom = 0,
    } = dragAreaRef.current?.getBoundingClientRect() || {};

    console.log(boundingBox?.offsetTop);
    setCoords(boundingBox?.offsetTop);

    if (boundingBox) {
      event = event || window.event;
      if (
        // event.clientX > left &&
        // event.clientX < right &&
        event.clientY > top &&
        event.clientY < bottom
      ) {
        event.preventDefault();
        // pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;
        // pos3 = event.clientX;
        pos4 = event.clientY;
        boundingBox.style.top = boundingBox.offsetTop - pos2 + "px";
        boundingBox.style.left = boundingBox.offsetLeft - pos1 + "px";
      }
    }
  };

  const stop = () => {
    const boundingBox = dragRef.current;
    if (boundingBox) {
      boundingBox.onmouseup = null;
      boundingBox.onmousemove = null;
      setOpacity(1);
    }
  };

  const start = (event) => {
    const box = dragRef.current;
    if (box) {
      event = event || window.event;
      event.preventDefault();
      // pos3 = event.pageX;
      pos4 = event.pageY;
      box.onmouseup = stop;
      box.onmousemove = drag;
      setOpacity(0.5);
    }
  };
  const SendFriendRequestNew = async (requestId, userId) => {
    //type === 1 && setLiked(true);
    console.log(socket);
    socket?.emit("sendNotification", {
      senderID: userId,
      senderName: userName,
      receiverID: requestId,
      type: "Friend Request From",
    });
    // socket.on("getNotification", (response) => {
    //   console.log(response);
    // });
    const friendDetails = {
      from: parseInt(userId),
      to: parseInt(requestId),
      status: "request",
    };
    const requestfriend = await axios.post(
      `${config.url}/api/FriendRequestFrom`,
      friendDetails,
      {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      }
    );
    // requestfriend.then((response) => {
    console.log(requestfriend);
    // });
  };
  useEffect(() => {
    //  get global mouse coordinates
    if (!hasBeenCalled) {
      // Perform your logic for the first function call here
      console.log("First useEffect call");
      getUserDetails();
      setHasBeenCalled(true);
    } else {
      // Perform your logic for subsequent function calls here
      console.log("Subsequent useEffect call");
    }

    const handleWindowMouseMove = (event) => {
      console.log("event");
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    //window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };
  const changeProfileMEnu = (menu) => {
    setChangeMenu(menu);
  };
  return (
    <>
      <div className="FriendBanner dragscroll" ref={dragAreaRef}>
        {/* <div className="FriendBannerHeaderBackground"></div> */}
        {console.log(UserDetailsAfterGet)}
        {session === true ? (
          <img
            src={UserDetailsAfterGet.bannerImage}
            style={{
              width: "100%",
              position: "absolute",
              left: 0,
              right: 0,
              top: coords,
              cursor: "grab",
            }}
            ref={dragRef}
            className="draggableDiv"
            onMouseDown={start}
          />
        ) : (
          <img
            src={UserDetailsAfterGet.bannerImage}
            style={{
              width: "100%",
              position: "absolute",
              left: 0,
              right: 0,
              top: coords,
            }}
          />
        )}
        {session === true ? (
          uploadBackgroundBannerFile > 0 ? (
            <Button
              style={{
                position: "absolute",
                zIndex: "999999",
                right: "1rem",
                bottom: "1rem",
                opacity: Opacity,
              }}
              variant="contained"
              startIcon={<SaveAltIcon />}
            >
              Save
            </Button>
          ) : (
            <Button
              style={{
                position: "absolute",
                zIndex: "999999",
                right: "1rem",
                bottom: "1rem",
              }}
              variant="contained"
              startIcon={<UploadFileIcon />}
              onClick={() => setuploadBackgroundBannerFile(1)}
            >
              Upload
            </Button>
          )
        ) : (
          <div className="followingButton">
            {console.log(checkFriendRequest)}
            {FriendRequest > 0 ? (
              checkFriendRequest.status === "request" ? (
                "Request Waiting"
              ) : checkFriendRequest.status === "Accept" ? (
                "Friends"
              ) : (
                <span
                  style={{ lineHeight: "1.5rem" }}
                  onClick={() => {
                    SendFriendRequestNew(UserDetailsAfterGet.userId, userId);
                  }}
                >
                  Add Friend
                  <SendIcon
                    style={{
                      fontSize: "14px",
                      position: "relative",
                      top: "3px",
                      marginLeft: "0.5rem",
                    }}
                  />
                </span>
              )
            ) : (
              <span
                style={{ lineHeight: "1.5rem" }}
                onClick={() => {
                  SendFriendRequestNew(UserDetailsAfterGet.userId, userId);
                }}
              >
                Add Friend
                <SendIcon
                  style={{
                    fontSize: "14px",
                    position: "relative",
                    top: "3px",
                    marginLeft: "0.5rem",
                  }}
                />
              </span>
            )}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            width: "90px",
            height: "90px",
            background: "#fff",
            borderRadius: 50,
            left: "38vw",
            right: 0,
            top: "3.5rem",
            bottom: 0,
            marginRight: 0,
            border: "4px double #000",
            boxShadow: "0px 0px 13px #fff",
          }}
        >
          <img
            src={UserDetailsAfterGet.profile_pic}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "3rem",
              boxShadow: "0px 0px 5px #000",
            }}
          />
          {session === true ? (
            <CameraAltIcon
              style={{
                position: "relative",
                bottom: "1.4rem",
                left: "2rem",
                color: "#fff",
                fontSize: 20,
              }}
            />
          ) : null}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "40px",
          //border: "1px solid #000",
          // padding: "0.4rem",
          background: "linear-gradient(360deg, #0f9bed,#50beff,#0f9bed)",
          color: "#fff",
          fontWeight: "600",
          lineHeight: "40px",
        }}
      >
        <div
          className="FriendsAbout active"
          onClick={() => {
            changeProfileMEnu("about");
          }}
        >
          About
        </div>
        <div
          className="FriendsAbout"
          onClick={() => {
            changeProfileMEnu("friends");
          }}
        >
          Friends
        </div>
        <div
          className="FriendsAbout"
          onClick={() => {
            changeProfileMEnu("pages");
          }}
        >
          Pages
        </div>
        <div
          className="FriendsAbout"
          onClick={() => {
            changeProfileMEnu("followers");
          }}
        >
          Followers
        </div>
        <div
          className="FriendsAbout"
          onClick={() => {
            changeProfileMEnu("apps");
          }}
        >
          Apps
        </div>
        <div
          className="FriendsAbout"
          onClick={() => {
            changeProfileMEnu("feeds");
          }}
        >
          Feeds
        </div>
      </div>
      {ChangeMenu === "about" ? (
        <div style={{ width: "100%", height: "200px", padding: "2rem" }}>
          <div style={{ width: "100%", height: 40, textAlign: "right" }}>
            <Button variant="contained">Add</Button>
          </div>

          <div
            style={{
              fontFamily: "Roboto",
              width: "100%",
              height: "50px",
              lineheight: "50px",
            }}
          >
            <span
              style={{
                width: "10%",
                height: "50px",
                lineHeight: "35px",
                float: "left",
              }}
            >
              <strong>Name</strong>
            </span>{" "}
            <span
              style={{
                width: "80%",
                height: "40px",
                // border: "1px solid #000",
                float: "left",
                padding: "0.5rem",
                borderRadius: "5px",
                background: "linear-gradient(45deg, #f3f3f3, transparent)",
              }}
            >
              {UserDetailsAfterGet.userName}
            </span>
            <p style={{ clear: "both" }}></p>
          </div>
          <div
            style={{
              fontFamily: "Roboto",
              width: "100%",
              height: "50px",
              lineheight: "50px",
            }}
          >
            <span
              style={{
                width: "10%",
                height: "50px",
                lineHeight: "35px",
                float: "left",
              }}
            >
              <strong>Email</strong>
            </span>
            <span
              style={{
                width: "80%",
                height: "40px",
                // border: "1px solid #000",
                float: "left",
                padding: "0.5rem",
                borderRadius: "5px",
                background: "linear-gradient(45deg, #f3f3f3, transparent)",
              }}
            >
              {UserDetailsAfterGet.email} <EditIcon style={{ fontSize: 14 }} />
            </span>
            <p style={{ clear: "both" }}></p>
          </div>
          <div
            style={{
              fontFamily: "Roboto",
              width: "100%",
              height: "50px",
              lineheight: "50px",
            }}
          >
            <span
              style={{
                width: "10%",
                height: "50px",
                lineHeight: "35px",
                float: "left",
              }}
            >
              <strong>Location</strong>{" "}
            </span>
            <span
              style={{
                width: "80%",
                height: "40px",
                // border: "1px solid #000",
                float: "left",
                padding: "0.5rem",
                borderRadius: "5px",
                background: "linear-gradient(45deg, #f3f3f3, transparent)",
              }}
            >
              {UserDetailsAfterGet.email} <EditIcon style={{ fontSize: 14 }} />
            </span>
            <p style={{ clear: "both" }}></p>
          </div>
        </div>
      ) : ChangeMenu === "friends" ? (
        <div>Friend</div>
      ) : null}
    </>
  );
}
