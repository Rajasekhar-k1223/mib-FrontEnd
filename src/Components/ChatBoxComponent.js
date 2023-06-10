import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  createRef,
  useImperativeHandle,
} from "react";
//import MessagesList from "./MessagesList";
import InputEmoji from "react-input-emoji";
import { config } from "../Config";
import axios from "axios";
import image from "../assets/images/avatar.png";
import ReactAudioPlayer from "react-audio-player";
import Accept from "../assets/images/Accept_1.gif";
import Rejected from "../assets/images/Rejected_1.gif";
import RingTone from "../assets/audio/beam_me_up.mp3";
import { IoIosVideocam, IoMdCall } from "react-icons/io";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { io } from "socket.io-client";
import VideoCalling from "./VideoCalling";
import { FiPhoneOff } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
// import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const MessagesList = forwardRef((props, ref) => {
  const [messagesTotalList, setmessagesTotalList] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const bottom = useRef(null);
  const msg = props;
  const FrdId = msg.frdid;
  const userToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const AccessDetails = {
    headers: {
      Authorization: "Bearer " + userToken,
      // "Content-Type": "application/json",
    },
    params: {
      from: userId,
      to: FrdId,
    },
  };

  useImperativeHandle(ref, () => ({
    addMsgToList(text, fridId, date) {
      const current = new Date();
      // const date = `${current.getDate()}/${
      //   current.getMonth() + 1
      // }/${current.getFullYear()}`;
      //   console.log("child function 1 called");
      console.log(text);
      console.log(fridId);
      const messageNew = {
        friendId: fridId,
        from: userId,
        message: text,
        to: fridId,
        created_at: date,
      };
      console.log(messagesTotalList);
      bottom.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setmessagesTotalList([...messagesTotalList, messageNew]);
    },
    // childFunction2() {
    //   console.log("child function 2 called");
    // },
  }));
  useEffect(() => {
    getMsgs(FrdId);
  }, []);
  const getMsgs = async (FrdId) => {
    console.log(AccessDetails);
    const r = await axios.get(
      `${config.url}/api/GetMessagesFromFriends`,
      AccessDetails
    );
    console.log("r.data", r);
    const sorted_r = r.data;

    const msgResponse = sorted_r.data.map((ele) => {
      const y = { ...ele, friendId: FrdId };
      return y;
    });
    setmessagesTotalList(...messagesTotalList, msgResponse);
    setisLoaded(true);
    // scrollToBottom();
    console.log(msgResponse);
    // bottom.current?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "nearest",
    //   inline: "start",
    // });
    // window.scrollTo(0, document.querySelector(".messagesView").scrollHeight);
  };

  return (
    <div>
      {isLoaded ? (
        messagesTotalList.map((messages, index) => {
          return (
            <div key={index}>
              {/* <img
                src={image}
                style={{
                  width: "18px",
                  border: "4px solid #fff",
                  borderRadius: "3rem",
                  position: "relative",
                  // left: messages.from == userId ? "9px" : "-9px",
                  bottom: "0px",
                  float: messages.from == userId ? "right" : "left",
                }}
              /> */}
              <div className={messages.from == userId ? "sender" : "receiver"}>
                <div
                  style={{
                    float: "revert",
                    marginLeft: 6,
                    marginRight: 4,
                    width: "100%",
                  }}
                >
                  {messages.message}
                </div>
                {messages.from == userId ? (
                  <span style={{ fontSize: 8, float: "right" }}>
                    {/* {new Date(messages.created_at).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })} */}
                    {new Date(messages.created_at).toLocaleTimeString(
                      navigator.language,
                      { hour: "2-digit", minute: "2-digit" }
                    )}
                  </span>
                ) : (
                  <span style={{ fontSize: 8, marginLeft: "1rem" }}>
                    {new Date(
                      Date.parse(messages.created_at)
                    ).toLocaleTimeString()}
                  </span>
                )}
              </div>
              <div className="clear"></div>
            </div>
          );
        })
      ) : (
        <>
          <Box sx={{ width: 200, float: "right" }}>
            <Skeleton animation="wave" style={{ height: 30 }} />
          </Box>
          <div className="clear"></div>
          <Box sx={{ width: 200, float: "left" }}>
            <Skeleton animation="wave" style={{ height: 30 }} />
          </Box>
          <div className="clear"></div>
          <Box sx={{ width: 200, float: "right" }}>
            <Skeleton animation="wave" style={{ height: 30 }} />
          </Box>
          <Box sx={{ width: 200, float: "right" }}>
            <Skeleton animation="wave" style={{ height: 30 }} />
          </Box>
          <div className="clear"></div>
          <Box sx={{ width: 200, float: "right" }}>
            <Skeleton animation="wave" style={{ height: 30 }} />
          </Box>
          <div className="clear"></div>
          <Box sx={{ width: 200, float: "right" }}>
            <Skeleton animation="wave" style={{ height: 30 }} />
          </Box>
          <div className="clear"></div>
          <Box sx={{ width: 200, float: "left" }}>
            <Skeleton animation="wave" style={{ height: 30 }} />
          </Box>
          <div className="clear"></div>
          <Box sx={{ width: 200, float: "right" }}>
            <Skeleton animation="wave" style={{ height: 30 }} />
          </Box>
          <div className="clear"></div>
        </>
      )}
      <div ref={bottom}></div>
    </div>
  );
});

export default function ChatBoxComponent(props) {
  const item = props;
  let socket = item.socket;
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [text, setText] = useState("");
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [VideoCalling, setVideoCalling] = useState(false);
  const childRef = useRef(null);
  const mesRef = useRef(null);
  const listInnerRef = useRef();
  const navigation = useNavigate();
  const [clickCall, setclickCall] = useState(false);
  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   if (window.scrollY > 400) {
    //     setShowTopBtn(true);
    //   } else {
    //     setShowTopBtn(false);
    //   }
    // });
  }, []);

  //   const handleClick = () => {
  //     childRef.current.childFunction1();

  //     childRef.current.childFunction2();
  //   };
  const checkingClose = (item) => {
    console.log(item);
    //   var array = [...PopupChatBoxByUser]; // make a separate copy of the array
    //   var arrayFriends = [...friendslistChat]; // make a separate copy of the array
    //   var index = array.indexOf(item);
    //   var indexFriends = arrayFriends.indexOf(item);
    //   console.log(index);
    //   if (index !== -1) {
    //     console.log(index);
    //     array.splice(index, 1);
    //     arrayFriends.splice(indexFriends, 1);
    //     console.log(array);
    //     setTimeout(() => {
    //       setPopupChatBoxByUser(array);
    //       setfriendslistChat(arrayFriends);
    //     }, 10);
    //   }
  };

  const handleOnEnter = (text, fridId) => {
    //console.log(messageList);
    let ip_address = config.socketIp;
    let socket_port = config.socket;
    let socket = io(ip_address + ":" + socket_port);
    let messageData = {
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
      token: token,
      message: text,
      from: userId,
      to: fridId,
    };
    socket.emit("sendChatToServer", messageData);
    socket.on("sendChatToClient", (message) => {
      // console.log(message);
      childRef.current.addMsgToList(
        //message.message.message,
        //message.message.to
        message.message.data.message,
        message.message.data.to,
        message.message.data.created_at
      );
      socket.close();
    });
    // const checksocket = socket;
    // console.log(text);
    // console.log(socket);
    // console.log(socket[0]);
    //return false;

    // childRef.current.childFunction2();
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
    // return (
    //   <div>
    //     <MessagesList onNameChange={text} />
    //   </div>
    // );
  };
  const VideoCall = (userData) => {
    // console.log(username);
    // return false;
    // setVideoCalling(true);
    // return <Video data={username} />;
    // VideoCalling ? setVideoCalling(false) : setVideoCalling(true);
    // alert(VideoCalling)
    //navigation("/VideoCalling", { state: { userData: username } });
    console.log(socket);
    socket.emit("callfromVideo", { userData, userId });
  };
  return (
    <>
      <div
        className={"chatbox chat-" + item.data.userId}
        style={{
          right: 13 * (item.index + 1) + item.index + item.index + "rem",
        }}
        key={item.index}
      >
        <div className="chat-Header">
          <div className="chat-Header-title">{item.data.userName}</div>
          <div
            style={{
              width: "7%",
              float: "left",
              padding: "0px",
              lineHeight: "3rem",
              cursor: "pointer",
              height: "40px",
            }}
          >
            <HiDotsHorizontal
              onClick={() => {
                setclickCall(true);
                setTimeout(() => {
                  setclickCall(false);
                }, 5000);
              }}
            />
          </div>
          {clickCall ? (
            <div
              style={{
                width: "100%",
                position: "absolute",
                right: "0px",
                top: "2.5rem",
                zIndex: 9999,
                background: "#fff",
              }}
            >
              <div
                style={{
                  width: "49.1%",
                  float: "left",
                  padding: "0px",
                  lineHeight: "2.5rem",
                  cursor: "pointer",
                  textAlign: "center",
                  background: "linear-gradient(180deg, #2196F3, #61b5fb57)",
                  borderRadius: "0px 0px 5px 0px",
                }}
              >
                <IoIosVideocam onClick={() => VideoCall(item.data)} size={15} />
              </div>
              <div
                style={{
                  width: "50%",
                  float: "left",
                  padding: "0px",
                  lineHeight: "2.5rem",
                  marginLeft: "0.1rem",
                  cursor: "pointer",
                  textAlign: "center",
                  background: "linear-gradient(180deg, #2196F3, #61b5fb57)",
                  borderRadius: "0px 0px 0px 5px",
                }}
              >
                <IoMdCall size={15} />
              </div>
            </div>
          ) : null}
          <div
            style={{
              width: "5%",
              float: "left",
              padding: "0px",
              lineHeight: "2.5rem",
              marginLeft: "1.1rem",
              cursor: "pointer",
              fontSize: "35px",
            }}
          >
            -
          </div>
          <div
            className="close"
            onClick={() => {
              checkingClose(item);
            }}
          >
            X
          </div>
        </div>
        <div
          className={"chat-body chatAddMessage-" + item.data.userId}
          //   style={{ scrollBehavior: scrollBar ? "smooth" : "scroll" }}
        >
          {/* {item.data.userId} */}
          {/* {showTopBtn && ( */}
          <MessagesList
            className="icon-position icon-style messagesView"
            //  onClick={goToTop}
            frdid={item.data.userId}
            ref={childRef}
          />
          {/* )} */}
          {/* <MessagesList frdid={item.data.userId} ref={childRef} /> */}
        </div>

        <div className="chat-text">
          <div className="markdown">
            <InputEmoji
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={() => {
                handleOnEnter(text, item.data.userId);
              }}
              fontSize="12px"
              placeholder="Type a message"
            />
          </div>
        </div>
      </div>
      {VideoCalling ? <Video data={item.data.userId} /> : null}
      {/* <div style={{ position: "absolute" }}>
        {VideoCalling ? <VideoCalling /> : null}
      </div> */}
    </>
  );
}
const Video = (data) => {
  // alert(data);
  console.log(data);
  // const [Pause, setPause] = useState(false);
  const [CallingSysten, setCallingSysten] = useState(false);
  return (
    <div>
      {/* <ReactAudioPlayer
        src={RingTone}
        autoPlay
        controls
        // onPause={Pause}
        // onPlay={true}
      /> */}
      {CallingSysten ? (
        <div
          style={{
            width: "95%",
            height: "90vh",
            position: "fixed",
            background: "#030E3E",
            zIndex: 99999,
            left: 0,
            top: 0,
            margin: "2rem",
            borderRadius: "1rem",
          }}
        >
          {/* <Button
          onClick={() => {
            setPause(false);
          }}
        >
          Pause
        </Button> */}
          {/* <VideoCalling /> */}
          <div className="CallingUserNameICon">{data.data}</div>
          <div className="CallingControlsICons">
            <img
              src={Accept}
              className="acceptCall"
              onClick={() => {
                alert("Accepted");
              }}
            />
            <img
              src={Rejected}
              className="rejectedCall"
              onClick={() => {
                alert("Rejected");
              }}
            />
            {/* <FiPhoneOff /> */}
          </div>
        </div>
      ) : null}
    </div>
  );
};
