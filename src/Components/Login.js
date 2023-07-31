import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Avatar from "../assets/images/avatar.png";
import background from "../assets/images/backgroundLogin.jpg";
import { useNavigate } from "react-router-dom";
import { config } from "../Config";
import { AiTwotoneAlert } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { style } from "@mui/system";
//import gifsrc from "../assets/images/martina-woman-asking-a-support-worker-a-question.gif";
import social from "../assets/images/5551.jpg";
import mails from "../assets/images/64666.jpg";
import gifsrc1 from "../assets/images/transistor-fast-delivery-1.gif";
import gifsrc2 from "../assets/images/dazzle-team-celebrating-success-of-a-work-project.gif";
import CircularProgress from "@mui/material/CircularProgress";
import { io } from "socket.io-client";
import { useSocket } from "../Components/context/SocketProvider";
const axios = require("axios").default;

export default function Login() {
  const navigation = useNavigate();
  const socket = useSocket();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [passwordShow, setpasswordShow] = useState("password");
  const [passShow, setpassShow] = useState(false);
  const [LabelColor, setLabelColor] = useState("");
  const [submitData, setsubmitData] = useState(false);
  const [error, seterror] = useState("");
  const [errorhide, seterrorhide] = useState(false);
  //console.log("login");
  const [user, setUser] = useState("");
  // const [socket, setSocket] = useState(null);
  // useEffect(() => {
  //   // let ip_address = config.socketIp;
  //   // let socket_port = config.socket;
  //   // let socket = io(ip_address + ":" + socket_port);
  //   setSocket(socket);
  // }, []);

  useEffect(() => {
    console.log(localStorage.getItem("userName"));
    socket?.emit("newUser", localStorage.getItem("userId"));
  }, [socket, user]);
  const LoginAccount = () => {
    setsubmitData(true);
    const userInfo = {
      email: username,
      password: password,
    };
    axios
      .post(config.url + "/api/login", userInfo)
      .then((response) => {
        // this.setState({ articleId: response.data.id })
        // console.log(response);
        // return false;
        {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", response.data.userId);
          localStorage.setItem("userName", response.data.userName);
          if (response.status === 200) {
            setUser(response.data);
            navigation("/userpage", { socket: socket });
          } else {
            // alert(response.data.error);

            setTimeout(() => {
              seterrorhide(false);
              seterror("");
            }, 4000);
            seterrorhide(true);
            seterror(response.data.error + " Your Enter wrong credentials");
            setsubmitData(false);
          }
        }
      })
      .catch((error) => {
        alert(error);
        setsubmitData(false);
      });
  };
  return (
    <div>
      <div className="mainbannerLoginpage">
        {/* <img src={gifsrc} style={{ width: "21%" }} /> */}
        <img src={social} style={{ width: "100%" }} />
        {/* <img src={gifsrc2} /> */}
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="loginForm">
          <div>
            <img src={Avatar} style={{ widthg: 65, height: 65 }} />
          </div>
          <div>
            <TextField
              id="outlined-username"
              type="text"
              label="User name"
              style={{
                width: "80%",
                background: LabelColor,
                borderRadius: "5px",
              }}
              InputProps={{
                style: { height: 42 },
              }}
              InputLabelProps={{
                style: { height: 42, lineHeight: "0.9rem", fontSize: "0.8rem" },
              }}
              value={username}
              onKeyUpCapture={() => {
                setLabelColor("#fff");
              }}
              // onMouseLeave={() => {
              //   setLabelColor("");
              // }}
              onChange={(e) => {
                setusername(e.target.value);
              }}
              onKeyDown={(event) => {
                setusername(event.target.value);
                return event.keyCode === 13 ? LoginAccount() : null;
              }}
            />
          </div>
          <div style={{ position: "relative" }}>
            <TextField
              id="outlined-password-input"
              label="Password"
              type={passwordShow}
              autoComplete="current-password"
              style={{
                width: "80%",
                marginBottom: "0.3rem",
                background: LabelColor,
                borderRadius: "5px",
              }}
              onKeyDown={(event) => {
                return event.keyCode === 13 ? LoginAccount() : null;
              }}
              InputProps={{
                style: { height: 42, paddingRight: "1rem" },
              }}
              InputLabelProps={{
                style: { height: 42, lineHeight: "0.9rem", fontSize: "0.8rem" },
              }}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            {passShow ? (
              <div
                onClick={() => {
                  setpasswordShow("password");
                  setpassShow(false);
                }}
                className="passwordShoworHide"
              >
                <AiOutlineEyeInvisible />
              </div>
            ) : (
              <div
                onClick={() => {
                  setpasswordShow("text");
                  setpassShow(true);
                }}
                className="passwordShoworHide"
              >
                <AiOutlineEye />
              </div>
            )}
          </div>
          {errorhide ? <div className="error">{error}</div> : null}
          <div style={{ width: "100%", height: "35px" }}>
            <span
              onClick={() => {
                navigation("/passwordForgot");
              }}
              className="forgotBtn"
            >
              Forgot Password
            </span>
            <span
              className="signupBtn"
              onClick={() => {
                navigation("/signup");
              }}
            >
              SignUp
            </span>
            <div>{submitData}</div>
          </div>
          {/* <Link to="/userpage" style={{ textDecoratrion: "none" }}> */}
          <Stack
            direction="row"
            spacing={1}
            style={{ width: 115, margin: "auto" }}
          >
            {submitData ? (
              <CircularProgress style={{ marginLeft: "2rem" }} />
            ) : (
              <Button
                variant="contained"
                style={{ width: 115, fontSize: "small" }}
                endIcon={<SendIcon />}
                onClick={() => {
                  LoginAccount();
                }}
              >
                Submit
              </Button>
            )}
          </Stack>
          <img
            src={mails}
            style={{
              width: "100%",
              position: "relative",
              top: "2.5rem",
              boxShadow: "0px 0px 9px grey",
              // borderRadius: "5px",
            }}
          />
          {/* </Link> */}
        </div>
      </Box>
    </div>
  );
}
