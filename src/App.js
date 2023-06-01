import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
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
import FriendsList from "./Components/FriendsList";
// import { initializeApp } from "firebase/app";

// Initialize Firebase

function App() {
  //const [socket, setsocket] = useState(null);
  const [NotiRequest, setNotiRequest] = useState(false);
  const [NotiRequestData, setNotiRequestData] = useState([]);
  let ip_address = config.socketIp;
  let socket_port = config.socket;
  const socket = io(ip_address + ":" + socket_port);

  // useEffect(() => {
  //   let ip_address = config.socketIp;
  //   let socket_port = config.socket;
  //   socket === null
  //     ? setsocket(io(ip_address + ":" + socket_port))
  //     : setsocket(io(ip_address + ":" + socket_port));
  // }, []);
  useEffect(() => {
    // getNotification();
    // let ip_address = config.socketIp;
    // let socket_port = config.socket;
    // const socket = io(ip_address + ":" + socket_port);
    socket.on("getNotification", (response) => {
      console.log(response);
      setNotiRequestData([...NotiRequestData, response]);
      setNotiRequest(true);
      console.log(NotiRequestData);
      setTimeout(() => {
        setNotiRequest(false);
      }, 5000);
    });
    socket.on("getOnlinefrds", (userOn) => {
      alert(userOn);
      console.log(userOn);
      <FriendsList userOn={userOn} />;
    });
    socket.on("getNotificationAcceptfrom", (response) => {
      console.log(response);
      setNotiRequestData([...NotiRequestData, response]);
      setNotiRequest(true);
      console.log(NotiRequestData);
      // setTimeout(()=>{
      // setNotiRequest(false)
      // },5000)
    });

    socket.on("getNotificationAcceptto", (response) => {
      console.log(response);
      setNotiRequestData([...NotiRequestData, response]);
      setNotiRequest(true);
      console.log(NotiRequestData);
      // setTimeout(()=>{
      // setNotiRequest(false)
      // },5000)
    });
  }, [socket]);
  console.log(NotiRequestData);
  // const [checkingToken, setcheckingToken] = useState("");
  // useEffect(() => {
  //   document.addEventListener("click", checkingTokenCon);
  // }, []);
  // const checkingTokenCon = () => {
  //   localStorage.getItem("token") === ""
  //     ? setcheckingToken(false)
  //     : setcheckingToken(true);
  // };

  console.log("Socket App");
  console.log(socket);
  return (
    <>
      {NotiRequest
        ? NotiRequestData.map((data) => <GetNotifications data={data} />)
        : null}
      <Router>
        {/* {checkingToken ? <Header /> : null} */}
        <Routes>
          <Route exact path="/" element={<Login socket={socket} />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/userpage"
            element={<Userpage socket={socket} />}
          />
          <Route
            exact
            path="/email"
            element={<EmailSystem socket={socket} />}
          />
          <Route
            exact
            path="/settings"
            element={<Settings socket={socket} />}
          />
          <Route exact path="/profile" element={<Profile socket={socket} />} />
          <Route
            exact
            path="/chatList"
            element={<ChatList socket={socket} />}
          />
          <Route
            exact
            path="/friendsView"
            element={<FriendsView socket={socket} />}
          />
          <Route
            exact
            path="/newgrid"
            element={<NewGridView socket={socket} />}
          />
          <Route
            exact
            path="/videoCalling"
            element={<VideoCalling socket={socket} />}
          />
          <Route
            exact
            path="/passwordForgot"
            element={<PasswordForgot socket={socket} />}
          />
          <Route exact path="/signup" element={<UserNew />} />
          <Route
            exact
            path="/blog:appName"
            element={<BlogViewPage socket={socket} />}
          />
          <Route
            exact
            path="/page:appName"
            element={<AppViewPage socket={socket} />}
          />
          <Route
            exact
            path="/friend:friendName"
            element={<Friend socket={socket} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
