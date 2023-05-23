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
import {config} from "./Config";
import { io } from "socket.io-client";
// import { initializeApp } from "firebase/app";

// Initialize Firebase

function App() {
  const [socket, setsocket] = useState(null);
  useEffect(() => {
    let ip_address = config.socketIp;
  let socket_port = config.socket;
  socket === null ? setsocket(io(ip_address + ":" + socket_port)):setsocket(io(ip_address + ":" + socket_port))
  }, [])
  
  // const [checkingToken, setcheckingToken] = useState("");
  // useEffect(() => {
  //   document.addEventListener("click", checkingTokenCon);
  // }, []);
  // const checkingTokenCon = () => {
  //   localStorage.getItem("token") === ""
  //     ? setcheckingToken(false)
  //     : setcheckingToken(true);
  // };
  console.log(socket)
  return (
    <Router>
      {/* {checkingToken ? <Header /> : null} */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/userpage" element={<Userpage socket={socket} />} />
        <Route exact path="/email" element={<EmailSystem />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/chatList" element={<ChatList />} />
        <Route exact path="/friendsView" element={<FriendsView />} />
        <Route exact path="/newgrid" element={<NewGridView />} />
        <Route exact path="/videoCalling" element={<VideoCalling />} />
        <Route exact path="/passwordForgot" element={<PasswordForgot />} />
        <Route exact path="/signup" element={<UserNew />} />
        <Route exact path="/blog:appName" element={<BlogViewPage />} />
        <Route exact path="/page:appName" element={<AppViewPage />} />
        <Route exact path="/friend:friendName" element={<Friend socket={socket} />} />
      </Routes>
    </Router>
  );
}

export default App;
