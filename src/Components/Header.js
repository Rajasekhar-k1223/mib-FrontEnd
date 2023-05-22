import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { RiSettings2Line } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaHome } from "react-icons/fa";
import { config } from "../Config";
import { Base64 } from "js-base64";
import { IoIosNotifications } from "react-icons/io";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { io } from "socket.io-client";
export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [Searchbar, setSearchbar] = useState("none");
  const [inputWith, setinputWith] = useState(0);
  const [searchValue, setsearchValue] = useState("");
  const [listofusers, setlistofusers] = useState([]);
  const [NotificationList, setNotificationList] = useState([]);
  const [showNotifications, setshowNotifications] = useState(false);
  const open = Boolean(anchorEl);
  const userToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  let ip_address = config.socketIp;
  let socket_port = config.socket;
  let socket = io(ip_address + ":" + socket_port);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    // console.log(socket);
    socket.on("getNotification", (response) => {
      console.log(response);
    });
  }, []);

  const handleClose = (url) => {
    //setAnchorEl(null);
    // alert(url);
    navigation("/" + url);
  };
  const showNotificationList = async () => {
    const AccessDetailsUserCheck = {
      headers: {
        Authorization: "Bearer " + userToken,
        // "Content-Type": "application/json",
      },
      params: {
        from: userId,
        status: "accept",
      },
    };
    await axios
      .get(`${config.url}/api/CheckListNotification`, AccessDetailsUserCheck)
      .then((res) => {
        console.log(res.data.data);
        setNotificationList(res.data.data);
      });
  };
  const navigation = useNavigate();
  const LogOut = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("userId", "");
    navigation("/");
  };
  const selectFriendView = (name) => {
    const appName = Base64.encodeURI(Base64.encodeURI(name));
    //navigation("/" + type + ":?name=" + appName);
    navigation("/friend:?name=" + appName);
  };
  const checkinguri = (url) => {
    console.log(url);
    navigation("/" + url);
  };
  const showSearchBar = () => {
    for (let i = 0; i <= 400; i++) {
      console.log(i);
      setTimeout(() => {
        setinputWith(i);
        setSearchbar("block");
      }, 50);
    }
    // console.log(i);
    // alert(i);
  };
  const viewProfile = (name) => {
    const appName = Base64.encodeURI(Base64.encodeURI(name));
    navigation("/friend:?name=" + appName);
  };
  const checkingFriendsList = async (e) => {
    setsearchValue(e.target.value);
    console.log(searchValue);
    const AccessDetailsUser = {
      headers: {
        Authorization: "Bearer " + userToken,
        // "Content-Type": "application/json",
      },
      params: {
        searchName: e.target.value,
        sessionId: userId,
      },
    };
    await axios
      .get(`${config.url}/api/findFriendOrPage`, AccessDetailsUser)
      .then((response) => {
        // console.log(response.data.data);
        // const userList = response.data.data.map((userItem) => {
        //   console.log(Number(userItem.userId));
        //   console.log(userId);
        //   if (userItem.userId != userId) {
        //     return userItem;
        //   }
        // });
        const userList = response.data.data.filter(function (person) {
          return person.userId !== parseInt(userId);
        });
        console.log(userList);
        setlistofusers(userList);
      });
  };
  return (
    <header>
      <div className="headerTitle">MIBook</div>
      <div className="headerNavBar">
        <div className="menu">
          <input
            type="text"
            style={{
              display: Searchbar,
              width: inputWith,
              float: "left",
              eight: "30px",
              borderRadius: "5px",
              height: 30,
              padding: "0.5rem",
            }}
            // value={searchValue}
            // onKeyDown={(e) => {
            //   setsearchValue(e.target.value);
            //   console.log(e);
            // }}
            value={searchValue}
            // onChange={(e) => {
            //   setsearchValue(e.target.value);
            //   console.log(searchValue);
            // }}
            onChange={checkingFriendsList}
          />

          <div className="searchFriednsList">
            {listofusers.map((user, index) => {
              return (
                <div
                  style={{
                    margin: "0.2rem 0.5rem",
                    padding: "0rem 0.5rem",
                    border: "1px solid rgb(0 0 0 / 9%)",
                    borderRadius: 3,
                    fontSize: 14,
                    cursor: "pointer",
                    // boxShadow: "0px 0px 1px rgb(0 0 0 / 9%)",
                  }}
                  className="friendsListView"
                  onClick={() => {
                    viewProfile(user.userId);
                  }}
                >
                  {user.userName}
                  <Button style={{ float: "right" }} className="bg-primary">
                    Add
                  </Button>
                </div>
              );
            })}
          </div>

          <div style={{ float: "right" }}>
            <RiSearchLine
              size={20}
              onClick={() => {
                showSearchBar();
              }}
            />
            <FaHome
              size={20}
              onClick={() => {
                handleClose("userpage");
              }}
            />
            <RiSettings2Line size={20} />
            <RiMailLine
              size={20}
              onClick={() => {
                handleClose("email");
              }}
            />
            <BsFillChatDotsFill
              size={20}
              // style={{ padding: "0.5rem 0rem" }}
              onClick={() => {
                handleClose("chatList");
              }}
            />
            <BsFillGrid3X3GapFill
              size={20}
              onClick={() => {
                handleClose("newgrid");
              }}
            />
            <MdGroups
              size={20}
              onClick={() => {
                handleClose("friendsView");
              }}
            />
            <IoIosNotifications
              size={20}
              onMouseEnter={() => {
                setshowNotifications(true);
                showNotificationList();
              }}
              // onMouseUp={() => {
              //   alert("hello");
              //   setshowNotifications(false);
              // }}
              className="notificationIcon"
              onMouseLeave={() => {
                setTimeout(() => {
                  setshowNotifications(false);
                }, 99);
              }}
            />

            {showNotifications ? (
              <div
                className="notificationView"
                onMouseLeave={() => {
                  setshowNotifications(false);
                }}
                onMouseEnter={() => {
                  clearInterval();
                  setTimeout(() => {
                    setshowNotifications(true);
                  }, 100);
                }}
              >
                {NotificationList.length > 0 ? (
                  NotificationList.map((user, index) => {
                    return (
                      <div key={index} className="notificationAlertView">
                        {user.to}
                      </div>
                    );
                  })
                ) : (
                  <Box sx={{ width: "100%" }}>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </Box>
                )}
              </div>
            ) : null}
          </div>
        </div>
        <div className="usermenu">
          {/* <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          > */}
          <HiUserCircle size={35} color="black" className="userIconMenu" />
          <div className="Submunu">
            <div
              onClick={() => {
                handleClose("profile");
              }}
            >
              Profile
            </div>
            <div
              onClick={() => {
                handleClose("settings");
              }}
            >
              Setting
            </div>
            <div onClick={LogOut}>
              <AiOutlineLogout size={10} />
              Logout
            </div>
          </div>
          {/* </Button> */}
          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              //   onClick={handleClose}
              onClick={() => {
                handleClose("profile");
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose("settings");
              }}
            >
              Setting
            </MenuItem>
            <MenuItem onClick={LogOut}>
              <AiOutlineLogout size={15} />
              Logout
            </MenuItem>
          </Menu> */}
        </div>
      </div>
      <div className="clear"></div>
    </header>
  );
}
