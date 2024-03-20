import { Card, CardContent } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import image from "../../assets/images/avatar.png";
import emoji from "../../assets/images/emojiIcon.jpg";
import { FiSettings } from "react-icons/fi";
import InputEmoji from "react-input-emoji";
import Picker from "emoji-picker-react";
import { IoIosVideocam, IoMdCall } from "react-icons/io";
import { config } from "../../Config";
import axios from "axios";
import YAssit from "../../assets/images/yassit.gif";
import ChatBoxComponent from "../chat/ChatBoxComponent";
import Peer from "simple-peer";
import io from "socket.io-client";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const BlinkedBox = styled("div")({
  backgroundColor: "red",
  width: 10,
  height: 10,
  borderRadius: 15,
  float: "right",
  marginTop: 7,
  // animation: `${blink} 1s linear infinite`,
});
const OnlineBox = styled("div")({
  backgroundColor: "green",
  width: 10,
  height: 10,
  borderRadius: 15,
  float: "right",
  marginTop: 7,
  // animation: `${blink} 1s linear infinite`,
});
// import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket("ws://192.168.10.60:8000/laravel-websockets");
export default function FriendsList({ socket }) {
// alert("FriendsList")
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
  const [friends, setfriends] = useState([]);
  const [PopupChatBoxByUser, setPopupChatBoxByUser] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [ChatcontentView, setChatcontentView] = useState("");
  const [socketUsersList, setsocketUsersList] = useState([]);
  const [defaultValues, setdefaultValues] = useState("");
  const [checkonlineList, setcheckonlineList] = useState(false);

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
  // const socket = io.connect("http://localhost:" + config.socket);
 
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
  }, [friendslistChat, socket]);
  const checkingFriendsList = async () => {
    // console.log("object");
    // socket.on("LoginUserList", (users) => {
    //   console.log(users);
    //   users.map((item) => {
    //     socketUsersList.push(item);
    //   });
    //   setsocketUsersList(users);
    // });

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
      .get(`${config.url}/api/getFriendsList`, AccessDetails)
      .then(async (res) => {
        const friends = [];
          //  console.log(res.data.data[0]);
           const friends_List_len = await res.data.data[0].friends_list;
           if(friends_List_len.length > 0){
        await res.data.data[0].friends_list.map(async (item) => {
          //    console.log(item);
          const AccessDetailsUser = {
            headers: {
              Authorization: "Bearer " + userToken,
              // "Content-Type": "application/json",
            },
            params: {
              from: item.userId,
            },
          };
          //      console.log(AccessDetailsUser);
          await axios
            .get(`${config.url}/api/getFriendDetails`, AccessDetailsUser)
            .then(async (res) => {
              //       console.log(res.data.data[0]);
              setfriendsCount((friendsCount) => [
                ...friendsCount,
                res.data.data[0],
              ]);
              //  setfriendsCount([...friendsCount, res.data.data[0]]);
              friends.push(res.data.data[0]);
              //console.log(res.data.data[0]);
              // res.data.data[0].friends_list.map((item) => {
              //   console.log(item);
              //         console.log(friendsCount);
            });
          //setfriendsCount(friends);
          //   console.log(friendsCount);

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
      }
        const frdsListN = await res.data.data[0].friends_list;
        // socket.emit("FrdsonLine", { loginId: userId, userList: frdsListN });
        //  console.log(friendsCount);

        // console.log(friendsCount);
        // setfriendsCount(friends);
      });

    // console.log(friends);
  };
  const checkOnline = () => {
    socket.on("getOnlinefrds", async (responseFrds) => {
      const frdsStatus = friendsCount.map((frdLst) => {
        return responseFrds.map((frdOn) => {
          // alert(frdOn);

          if (frdOn.userId === frdLst.userId) {
            // console.log(frdLst.status);
            // const y = frdOn.userOn
            //   ? { ...frdLst, status: false }
            //   : { ...frdLst, status: true };
            const y = { ...frdLst, status: frdOn.userOn };

            return y;
          }
          // else {
          //   //  console.log(item);
          //   if (frdLst.frdLst === true) {
          //     // const itemcheck = frdLst.status
          //     //   ? { ...frdLst, status: false }
          //     //   : { ...frdLst, status: true };
          //     const itemcheck =  {...frdLst, status: frdOn.userOn };
          //     return itemcheck;
          //   } else {
          //     return frdLst;
          //   }
          // }
        });
      });
      setfriendsCount(frdsStatus);
    });
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
    // console.log(friendslistChat.filter(friend => friend.userId === item.userId))
    
    // console.log(updatestatefriendsList)
    // setTimeout(() => {console.log(friendslistChat)},1000)
    
    
    // console.log(friendslistChat);
    if (
      friendslistChat.find((itemx) => itemx.userId === item.userId) !==
      undefined
    ) {
      console.log("item exist");
    } else {
      console.log("Not exist item");
      //  this.state.Question.push(Qobj);
      const updatestatefriendsList = [...friendslistChat, item]
      const updatePopupChatBoxByUser = [...PopupChatBoxByUser, item]
      setfriendslistChat(updatestatefriendsList);
      setPopupChatBoxByUser(updatePopupChatBoxByUser);
    }
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
    //     `${config.url}/api/GetMessagesFromFriends`,
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
    if(item.userName === 'Assist'){

    }else{
      const r = await axios.get(
        `${config.url}/api/GetMessagesFromFriends`,
        AccessDetails
      );
      // console.log("r.data", r);
      const sorted_r = r.data;
  
      const respone = sorted_r.data.map((ele) => {
        const y = { ...ele, friendId: item.userId };
        return y;
      });
  
    }
   
    // console.log("Sttr", messageList);
    // console.log("--->", respone);
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
  const checkingClosePopUp = (item) => {
    console.log(friendslistChat)
    const checkusers = friendslistChat.filter(friend => friend.userId !== item.userId)
    var array = [...PopupChatBoxByUser]; // make a separate copy of the array
    var arrayFriends = [...friendslistChat]; // make a separate copy of the array
    var index = array.indexOf(item);
    var indexFriends = arrayFriends.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
      arrayFriends.splice(indexFriends, 1);
      console.log(array)
      setfriendslistChat(arrayFriends);
      setTimeout(() => {
        setPopupChatBoxByUser(array);
        // setfriendslistChat(arrayFriends);
        // setfriendslistChat(friendslistChat => friendslistChat.filter((data)=> data.id != item.userId ))
      }, 10);
      console.log(friendslistChat);
    }

    // setTimeout(() => {
    //   console.log(PopupChatBoxByUser);
    // }, 20);
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
  //       `${config.url}/api/SendMessageToFriend`,
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
        // setListIndex(undefined);
      }}
    >
      {/* {console.log(friendsCount)}
      {alert(friendsCount.length)} */}
      {/* {friendsCount.length > 0 ? <div>Empty</div> : console.log(friendsCount)} */}
      {/* <div>{friendsCount.length}</div> */}
      <div
        style={{ position: "relative" }} //key={index} // onMouseOut={() => { //   setListIndex(undefined); // }}
      >
        <Card
          className="frindCard"
          style={{ marginBottom: 2 }} // key={index} // onMouseOver={() => //   listIndex === index //     ? setListIndex(undefined) //     : setListIndex(index) // } // onMouseOut={() => { //   setListIndex(undefined); // }} // onClick={() => { //   showChatBox(item, index); // }}
          onClick={() => {
            showChatBox({"userName":"Assist",userId:0},"");
          }}
        >
          <CardContent
            style={{ padding: 10, fontSize: "14px", fontFamily: "monospace" }}
          >
            <img
              src={YAssit}
              style={{ width: "25px", borderRadius: "74%", float: "left" }}
            />
            Your Assit
          </CardContent>
        </Card>
        {/* {index === listIndex ? (

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

        )} */}
      </div>
      {friendsCount.filter((friends, index) => 
    index === friendsCount.findIndex(obj => JSON.stringify(obj) === JSON.stringify(friends))
).map((item, index) => {
        return (
          // <div key={index}>{item.userName}</div>
          <div
            style={{ position: "relative", cursor: "pointer" }}
            key={index}
            onMouseOut={() => {
              setListIndex(undefined);
            }}
          >
            <Card
              className="frindCard"
              style={{ marginBottom: 4 }}
              key={index}
              onMouseOver={() =>
                listIndex === index
                  ? setListIndex(undefined)
                  : setListIndex(index)
              }
              // onMouseOut={() => {
              //   setListIndex(undefined);
              // }}
              onClick={() => {
                showChatBox(item, index);
              }}
            >
              <CardContent
                style={{ padding: 10 }}
                className="frd_List_profile_card"
              >
                <img src={item.profile_pic} className="frd_List_profile_pic" />
                {item.userName}
                {/* <BlinkedBox /> */}
                {item.is_login === true ? <OnlineBox /> : <BlinkedBox />}
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
                <img src={item.profile_pic} className="frd_List_profile_pic" />
                {item.userName}
                <BlinkedBox />
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
      <div>
        {PopupChatBoxByUser.map((item, index) => {
          return <ChatBoxComponent data={item} index={index} checkingClosePopUp={checkingClosePopUp} />;
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