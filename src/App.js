import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";
import Login from "./Components/Login";
import About from "./Components/About";
import Userpage from "./Components/Userpage";
import EmailSystem from "./Components/EmailSystem";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";
import FriendsView from "./Components/FriendsView";
import NewGridView from "./Components/NewGridView";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
import VideoCalling from "./Components/VideoCalling";
import BlogViewPage from "./Components/BlogViewPage";
import AppViewPage from "./Components/AppViewPage";
import UserNew from "./Components/UserNew";
import PasswordForgot from "./Components/PasswordForgot";
import Friend from "./Components/Friend";
import ChatList from "./Components/ChatList";
import GetNotifications from "./Components/GetNotifications";
import { config } from "./Config";
import { io } from "socket.io-client";
import GetCallRequest from "./Components/GetCallRequest";
import FriendsList from "./Components/FriendsList";
import CallConnected from "./Components/CallConnected";
import GetCallRequestFrom from "./Components/GetCallRequestFrom";
import CalltoScreen from "./Components/CalltoScreen";
import CallFromScreen from "./Components/CallFromScreen";
import Peer from "simple-peer";
import VideoPlayer from "./Components/VideoPlayer";
import Notifications from "./Components/Notifications";
import { SocketContext } from "./Context";
import RoomPage from "./Components/RoomPage";
import Room from "./Components/Room";
import { PeerProvider } from "./Components/Peer";
import { useSocket } from "./Components/context/SocketProvider";
//import { useSocket } from "./Socket";
// import { initializeApp } from "firebase/app";

// Initialize Firebase

function App() {
  //const [socket, setsocket] = useState(null);
  const [NotiRequest, setNotiRequest] = useState(false);
  const [NotiRequestData, setNotiRequestData] = useState([]);
  const [NotiCallRequest, setNotiCallRequest] = useState(false);
  const [NotiCallRequestData, setNotiCallRequestData] = useState([]);
  const [NotiCallRequestAccept, setNotiCallRequestAccept] = useState(false);
  const [NotiCallRequestAcceptData, setNotiCallRequestAcceptData] = useState(
    []
  );
  const [NotiCallRequestFrom, setNotiCallRequestFrom] = useState(false);
  const [NotiCallRequestDataFrom, setNotiCallRequestDataFrom] = useState([]);
  const [accepted, setaccepted] = useState(false);
  const [ReceivingCall, setReceivingCall] = useState(false);
  const [Caller, setCaller] = useState();
  const [Name, setName] = useState();
  const [CallerSignal, setCallerSignal] = useState();
  // const [call, setCall] = useState({});
  //let ip_address = config.socketIp;
  //let socket_port = config.socket;
  // const socket = io(ip_address + ":" + socket_port);
  const socket = useSocket();
  useEffect(() => {
    socket.on("incoming-call-to", (response) => {
      console.log(response);
      setNotiCallRequestData([...NotiCallRequestData, response]);
      setNotiCallRequest(true);
    });
  });
  // const {
  //   name,
  //   callAccepted,
  //   myVideo,
  //   userVideo,
  //   callEnded,
  //   stream,
  //   call
  // } = useContext(SocketContext);

  // useEffect(() => {
  //   let ip_address = config.socketIp;
  //   let socket_port = config.socket;
  //   socket === null
  //     ? setsocket(io(ip_address + ":" + socket_port))
  //     : setsocket(io(ip_address + ":" + socket_port));
  // }, []);
  // useEffect(() => {
  //   alert(SocketProvider);
  //   // getNotification();
  //   // let ip_address = config.socketIp;
  //   // let socket_port = config.socket;
  //   // const socket = io(ip_address + ":" + socket_port);
  //   socket.on("getNotification", (response) => {
  //     console.log(response);
  //     setNotiRequestData([...NotiRequestData, response]);
  //     setNotiRequest(true);
  //     console.log(NotiRequestData);
  //     setTimeout(() => {
  //       setNotiRequest(false);
  //     }, 5000);
  //   });
  //   // socket.on("getOnlinefrds", (userOn) => {
  //   //   alert(userOn);
  //   //   console.log(userOn);
  //   //   <FriendsList data={userOn} />;
  //   // });
  //   socket.on("getNotificationAcceptfrom", (response) => {
  //     console.log(response);
  //     setNotiRequestData([...NotiRequestData, response]);
  //     setNotiRequest(true);
  //     console.log(NotiRequestData);
  //     // setTimeout(()=>{
  //     // setNotiRequest(false)
  //     // },5000)
  //   });

  //   socket.on("getNotificationAcceptto", (response) => {
  //     console.log(response);
  //     setNotiRequestData([...NotiRequestData, response]);
  //     setNotiRequest(true);
  //     console.log(NotiRequestData);
  //     // setTimeout(()=>{
  //     // setNotiRequest(false)
  //     // },5000)
  //   });
  //   socket.on("CallAcceptance", (response) => {
  //     // console.log(response);
  //     setNotiCallRequestData([...NotiCallRequestData, response]);
  //     setNotiCallRequest(true);
  //     // console.log(NotiRequestData);
  //     // setTimeout(()=>{
  //     // setNotiRequest(false)
  //     // },5000)
  //   });
  //   socket.on("callAcceptedres", (response) => {
  //     // console.log(response);
  //     // setNotiCallRequestAcceptData([...NotiCallRequestAcceptData, response]);
  //     setNotiCallRequestAccept(true);
  //     setaccepted(true);
  //     // console.log(NotiRequestData);
  //     // setTimeout(()=>{
  //     // setNotiRequest(false)
  //     // },5000)
  //   });
  //   socket.on("CallAcceptanceSender", (response) => {
  //     // console.log(response);
  //     setNotiCallRequestDataFrom([...NotiCallRequestData, response]);
  //     setNotiCallRequest(true);
  //     // console.log(NotiRequestData);
  //     // setTimeout(()=>{
  //     // setNotiRequest(false)
  //     // },5000)
  //   });
  //   socket.on("callUser", ({ from, name: callerName, signal }) => {
  //     console.log({ from, name: callerName, signal });
  //     alert(from);
  //     // setCall({ isReceivingCall: true, from, name: callerName, signal });
  //   });
  //   // socket.on("callUser", (data) => {

  //   //   // alert(data)
  //   //   // console.log(data)
  //   //   // setReceivingCall(true);
  //   //   // setCaller(data.from);
  //   //   // setName(data.name);
  //   //   // setCallerSignal(data.signal);
  //   //   // setNotiCallRequestAcceptData([...NotiCallRequestAcceptData, data]);
  //   // });
  //   socket.on("callAccepted", (signal) => {
  //     //setCallAccepted(true);
  //     const peer = new Peer();
  //     peer.signal(signal);
  //     //setNotiCallRequestAcceptData([...NotiCallRequestAcceptData, signal]);
  //   });
  //   socket.on("calling-Request", (data) => {
  //     console.log("Request");
  //     setNotiCallRequestData([...NotiCallRequestData, data]);
  //     setNotiCallRequest(true);
  //   });
  // }, [socket]);
  // console.log(NotiRequestData);
  // const [checkingToken, setcheckingToken] = useState("");
  // useEffect(() => {
  //   document.addEventListener("click", checkingTokenCon);
  // }, []);
  // const checkingTokenCon = () => {
  //   localStorage.getItem("token") === ""
  //     ? setcheckingToken(false)
  //     : setcheckingToken(true);
  // };

  // console.log("Socket App");
  // console.log(socket);
  return (
    <>
      {/* {call.isReceivingCall? <Notifications />:null} */}
      {NotiRequest
        ? NotiRequestData.map((data) => <GetNotifications data={data} />)
        : null}
      {/* {NotiCallRequest
        ? NotiCallRequestData.map((data) => <GetCallRequest data={data} />)
        : null} */}
      {/* {NotiCallRequest
        ? NotiCallRequestData.map((data) => ( */}
      {NotiCallRequest
        ? NotiCallRequestData.map((data) => <GetCallRequest data={data} />)
        : null}
      {/* ))
        : null} */}
      {NotiCallRequestFrom
        ? NotiCallRequestDataFrom.map((data) => <CallFromScreen data={data} />)
        : null}
      {NotiCallRequestAccept
        ? NotiCallRequestAcceptData.map((data) => (
            <CalltoScreen callAccept={true} data={data} />
          ))
        : null}
      {/* <SocketProvider> */}
      {/* <PeerProvider> */}
      {/* {checkingToken ? <Header /> : null} */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/userpage" element={<Userpage />} />
        <Route exact path="/email" element={<EmailSystem />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/chatList" element={<ChatList />} />
        <Route exact path="/friendsView" element={<FriendsView />} />
        <Route exact path="/newgrid" element={<NewGridView />} />
        <Route exact path="/videoplayer" element={<VideoPlayer />} />
        {/* <Route
                exact
                path="/videoCalling"
                element={<VideoCalling socket={socket} />}
              /> */}
        <Route exact path="/passwordForgot" element={<PasswordForgot />} />
        <Route exact path="/signup" element={<UserNew />} />
        <Route exact path="/blog:appName" element={<BlogViewPage />} />
        <Route exact path="/page:appName" element={<AppViewPage />} />
        <Route exact path="/friend:friendName" element={<Friend />} />
        <Route path="/room/:roomid" element={<Room />} />
      </Routes>
      {/* </PeerProvider> */}
      {/* </SocketProvider> */}
    </>
  );
}

export default App;
