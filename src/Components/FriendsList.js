import { Card, CardContent } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import image from "../assets/images/avatar.png";
import emoji from "../assets/images/emojiIcon.jpg";
import { FiSettings } from "react-icons/fi";
import InputEmoji from "react-input-emoji";
import Picker from "emoji-picker-react";
import { IoIosVideocam, IoMdCall } from "react-icons/io";
import { config } from "../Config";
import axios from "axios";
import ChatBoxComponent from "./ChatBoxComponent";
import Peer from "simple-peer";
import io from "socket.io-client";
// import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket("ws://192.168.10.60:8000/laravel-websockets");
export default function FriendsList() {
  // window.$ = window.jQuery = require("jquery");
  // global.$ = global.jQuery = $;
  // client.onopen = () => {
  //   console.log("WebSocket Client Connected");
  // };
  const [userVisible, setuserVisible] = useState(false);
  const [listIndex, setListIndex] = useState(undefined);
  const [friendsList, setfriendsList] = useState([]);
  const [friendslistChat, setfriendslistChat] = useState([]);
  const [messageList, setmessageList] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState([]);
  const [showpicker, setshowpicker] = useState(false);
  const [pickerView, setpickerView] = useState(false);
  const [showEmojiContainers, setshowEmojiContainers] = useState(false);
  const [friendsCount, setfriendsCount] = useState([]);
  const [PopupChatBoxByUser, setPopupChatBoxByUser] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [ChatcontentView, setChatcontentView] = useState("");
  const [socketUsersList, setsocketUsersList] = useState([]);
  const [defaultValues, setdefaultValues] = useState("");

  const userToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  // const onEmojiClick = (event, emojiObject) => {
  //   // setChosenEmoji((chosenEmoji) => {
  //   //   return [ChatcontentView, ...emojiObject.emoji];
  //   //   // console.log(ChatcontentView);
  //   //   // return ChatcontentView;
  //   // });
  //   // setTimeout(() => {});
  //   setChatcontentView(
  //     setChosenEmoji((chosenEmoji) => {
  //       return [ChatcontentView, emojiObject + emojiObject.emoji];
  //       // console.log(ChatcontentView);
  //       // return ChatcontentView;
  //     })
  //   );
  //   console.log(ChatcontentView);
  // };
  const socket = io.connect("http://localhost:3006");
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src =
    //   "https://rawgit.com/mervick/emojionearea/master/dist/emojionearea.js";
    // script.async = true;
    // document.body.appendChild(script);
    // $(".emojidata").emojioneArea({
    //   pickerPosition: "top",
    //   tonesStyle: "bullet",
    // });
    // window.jQuery = jQuery;

    checkingFriendsList();
    //setfriendsCount(friends);
    // showEmojiContainer(0);
    //document.addEventListener("click", showEmojiContainer(0));
    //  document.addEventListener("click", checkingemojiClose, true);
    // return () => {
    //   document.removeEventListener("click", showEmojiContainer(0), true);
    // };
  }, []);
  const checkingFriendsList = async () => {
    console.log("object");
    socket.on("LoginUserList", (users) => {
      users.map((item) => {
        socketUsersList.push(item);
      });
      //setsocketUsersList(users);
    });

    const AccessDetails = {
      headers: {
        Authorization: "Bearer " + userToken,
        // "Content-Type": "application/json",
      },
      params: {
        from: userId,
      },
    };
    const r = await axios
      .get(
        `http://${config.ip}:${config.port}/api/getFriendsList`,
        AccessDetails
      )
      .then((res) => {
        const friends = [];
        res.data.data[0].friends_list.map(async (item) => {
          console.log(item);
          const AccessDetailsUser = {
            headers: {
              Authorization: "Bearer " + userToken,
              // "Content-Type": "application/json",
            },
            params: {
              from: item,
            },
          };
          await axios
            .get(
              `http://${config.ip}:${config.port}/api/getFriendDetails`,
              AccessDetailsUser
            )
            .then((res) => {
              // setfriendsCount([...friendsCount, res.data.data[0]]);
              friendsCount.push(res.data.data[0]);
              //console.log(res.data.data[0]);
              // res.data.data[0].friends_list.map((item) => {
              //   console.log(item);
            });
          console.log(friendsCount);
          //     const friend = {
          //       userName: res.data.data[0].userName,
          //       userId: res.data.data[0].userId,
          //       pickerView: false,
          //     };
          //     //friends.push(friend);
          //     setfriendsCount([...friendsCount, friend]);
          //     //console.log(socketUsersList);
          //     //console.log(res.data.data[0].userName);
          //   });
        });
        // console.log(friendsCount);
        // setfriendsCount(friends);
      });

    // console.log(friends);
  };

  const checkingemojiClose = () => {
    console.log("first");
  };
  const strToWords = (str) => {
    let words = [];
    let lines = str.split("\n");
    lines
      .filter((line) => (line ? true : false))
      .forEach((line) => {
        words = words.concat(
          line.split(" ").filter((line) => (line ? true : false))
        );
      });
    return words;
  };

  const showFriendData = (userId) => {
    return (
      <div
        className="hello"
        style={{ width: 100, height: 100, background: "red" }}
      >
        {userId}
      </div>
    );
  };

  const showChatBox = async (item, index) => {
    // console.log(item);
    // return <ChatBoxComponent data={item} />;
    //return false;
    //alert(".emodata-" + index);
    // const y = { name: name, pickerView: false };
    // console.log(y);
    // return false;
    // const resp_with_like = friendslistChat.map((el) => {
    //   const y = { ...el, pickerView: false };
    //   return y;
    // });
    // //  setfriendsList((friendsList) => [...friendsList, ...resp_with_like]);
    // if (friendslistChat.length == 0) {
    //console.log(AllFeeds.length);
    //   setfriendslistChat((friendslistChat) => [...friendslistChat, name]);
    //fetchImages();
    // } else {
    //   setfriendslistChat((friendslistChat) => [
    //     ...friendslistChat,
    //     ...resp_with_like,
    //   ]);
    // }
    // result = Object.values(
    //   data.reduce((r, o) => {
    //     r[o.id] = o;
    //     return r;
    //   }, {})
    // );
    // console.log(uniqueNames);
    // const resp_with_like = friendslistChat.map((el) => {
    //   const y = { ...el, like: false };
    //   return y;
    // });

    setfriendslistChat([...friendslistChat, item]);
    console.log(friendslistChat);
    if (
      friendslistChat.find((itemx) => itemx.userId === item.userId) !==
      undefined
    ) {
      //console.log("item exist");
    } else {
      //console.log("Not exist item");
      //  this.state.Question.push(Qobj);
      PopupChatBoxByUser.push(item);
    }

    console.log(PopupChatBoxByUser);
    //setfriendslistChat([...new Set([...friendslistChat, name])]);
    //console.log(friendslistChat);

    const AccessDetails = {
      headers: {
        Authorization: "Bearer " + userToken,
        // "Content-Type": "application/json",
      },
      params: {
        from: userId,
        to: item.userId,
      },
    };
    // setTimeout(() => {
    //   $("#emodata-" + item.userId).emojioneArea({
    //     // standalone: true,
    //     // autocomplete: false,
    //     // shortnames: true,
    //     // saveEmojisAs: "shortname",
    //     pickerPosition: "top",
    //     tonesStyle: "bullet",
    //     events: {
    //       keyup: function (editor, event) {
    //         if (event.which == 13) {
    //           console.log(editor);
    //           passmessagedata(item);
    //           if (event.shiftKey) {
    //             // With shift
    //           } else {
    //             event.preventDefault();
    //             //$("#button").click();
    //           }
    //         }
    //       },
    //     },
    //   });
    // }, 10);

    // axios
    //   .get(
    //     `http://${config.ip}:${config.port}/api/GetMessagesFromFriends`,
    //     AccessDetails
    //   )
    //   .then((response) => {
    //     // console.log(response.data.data);
    //     // .sort((a, b) =>
    //     //     a.messageId > b.messageId ? 1 : -1
    //     //   )
    //     const respone = response.data.data.map((ele) => {
    //       const y = { ...ele, friendId: item.userId };
    //       return y;
    //     });

    const r = await axios.get(
      `http://${config.ip}:${config.port}/api/GetMessagesFromFriends`,
      AccessDetails
    );
    console.log("r.data", r);
    const sorted_r = r.data;

    const respone = sorted_r.data.map((ele) => {
      const y = { ...ele, friendId: item.userId };
      return y;
    });

    console.log("Sttr", messageList);
    console.log("--->", respone);
    // setmessageList([...messageList, respone]);

    setisLoaded(true);

    // console.log(await message);
    // setTimeout(() => {
    //   console.log(friendslistChat);
    // }, 3000);
    // console.log(friendslistChat);
    //return false;
  };
  const chatMessageBoxfield = (e) => {
    setChatcontentView(e.target.textContent);
  };
  const checkingClose = (item) => {
    console.log(item);
    var array = [...PopupChatBoxByUser]; // make a separate copy of the array
    var arrayFriends = [...friendslistChat]; // make a separate copy of the array
    var index = array.indexOf(item);
    var indexFriends = arrayFriends.indexOf(item);
    console.log(index);
    if (index !== -1) {
      console.log(index);
      array.splice(index, 1);
      arrayFriends.splice(indexFriends, 1);
      console.log(array);
      setTimeout(() => {
        setPopupChatBoxByUser(array);
        setfriendslistChat(arrayFriends);
      }, 10);
    }

    setTimeout(() => {
      console.log(PopupChatBoxByUser);
    }, 20);
  };
  const showEmojiContainer = (id) => {
    console.log(id);
    // return false;
    // setshowEmojiContainers(true);
    const resp_with_like = friendsCount.map((item, key) => {
      //console.log("user Id ", item.userId);
      // console.log("Id  ", id);
      if (item.userId === id) {
        console.log(item.pickerView);
        const y = item.pickerView
          ? { ...item, pickerView: false }
          : { ...item, pickerView: true };
        console.log(y);
        return y;
      } else {
        //  console.log(item);
        if (item.pickerView === true) {
          const itemcheck = item.pickerView
            ? { ...item, pickerView: false }
            : { ...item, pickerView: true };
          return itemcheck;
        } else {
          return item;
        }
      }
    });
    console.log(resp_with_like);
    setfriendsCount(resp_with_like);
    console.log(friendsCount);
    //setpickerView(true);
  };
  // const passmessagedata = async (item) => {
  //   console.log(item);
  //   console.log(messageList);
  //   const message = $("#emodata-" + item.userId)
  //     .data("emojioneArea")
  //     .getText()
  //     .trim();
  //   console.log(message);
  //   const AccessDetails = {
  //     from: parseInt(userId),
  //     to: item.userId,
  //     message: message,
  //   };
  //   $("#emodata-" + item.userId)
  //     .data("emojioneArea")
  //     .setText("");
  //   // messageList.push(AccessDetails);
  //   //setmessageList([...messageList, [AccessDetails]]);
  //   console.log(messageList.length);
  //   const msgf = messageList.map((msg) => {
  //     const m = { ...msg, AccessDetails };
  //     console.log(msg);
  //     return m;
  //   });
  //   return false;
  //   console.log(msgf);
  //   // messageList.map((msgItem) => {
  //   //   console.log(msgItem);
  //   // });
  //   const messageto = await axios
  //     .post(
  //       `http://${config.ip}:${config.port}/api/SendMessageToFriend`,
  //       AccessDetails,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + userToken,
  //         },
  //       }
  //     )
  //     .then((response) => {})
  //     .catch((error) => {
  //       alert(error);
  //     });
  // };

  const passmessagedata = async (item) => {
    console.log(item);
    console.log(messageList);
  };

  const dfg = () => {
    console.log(messageList);
  };

  return (
    <div
      onMouseOut={() => {
        setListIndex(undefined);
      }}
    >
      {friendsCount.map((item, index) => {
        return (
          <>
            <div
              style={{ position: "relative" }}
              key={index}
              onMouseOut={() => {
                setListIndex(undefined);
              }}
            >
              <Card
                className="feedCard"
                style={{ marginBottom: 2 }}
                key={index}
                // onMouseOver={() =>
                //   listIndex === index
                //     ? setListIndex(undefined)
                //     : setListIndex(index)
                // }
                // onMouseOut={() => {
                //   setListIndex(undefined);
                // }}
                onClick={() => {
                  showChatBox(item, index);
                }}
              >
                <CardContent style={{ padding: 10 }}>
                  {item.userName}
                </CardContent>
              </Card>
              {index === listIndex ? (
                // {userVisible ? (
                <div
                  style={{
                    position: "absolute",
                    width: "300px",
                    height: "100px",
                    right: "210px",
                    background: "#fff",
                    borderRadius: 15,
                    padding: "1rem",
                    boxShadow: "0px 0px 5px #000",
                    top: 0,
                  }}
                  onMouseOver={() => {
                    setListIndex(index);
                  }}
                >
                  {item.userName}
                </div>
              ) : (
                ""
              )}
            </div>
          </>
        );
      })}
      <div>
        {PopupChatBoxByUser.map((item, index) => {
          return <ChatBoxComponent data={item} index={index} />;
        })}
      </div>
      {/* <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card>
      <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card>
      <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card>
      <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card>
      <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card>
      <Card className="feedCard" style={{ marginBottom: 2 }}>
        <CardContent style={{ padding: 10 }}>Rajaskrhts</CardContent>
      </Card> */}
      <div style={{ position: "fixed", bottom: 5 }}>
        <FiSettings
          size={13}
          style={{ margin: "0 5" }}
          onClick={() => {
            alert("hello");
          }}
        />
        Chat Settings
      </div>
    </div>
  );
}
