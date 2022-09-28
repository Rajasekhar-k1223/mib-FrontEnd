import React, { useState } from "react";
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
import CircularProgress from "@mui/material/CircularProgress";
const axios = require("axios").default;

export default function Login() {
  const navigation = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [passwordShow, setpasswordShow] = useState("password");
  const [passShow, setpassShow] = useState(false);
  const [LabelColor, setLabelColor] = useState("");
  const [submitData, setsubmitData] = useState(false);
  const [error, seterror] = useState("");
  const [errorhide, seterrorhide] = useState(false);
  console.log("login");
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
          if (response.status === 200) {
            navigation("/userpage");
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
      <div
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: 0,
        }}
      ></div>

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
              style={{
                float: "left",
                fontSize: "small",
                margin: "0.3rem",
                marginLeft: "1.6rem",
                cursor: "pointer",
              }}
              onClick={() => {
                navigation("/passwordForgot");
              }}
            >
              Forgot Password
            </span>
            <span
              style={{
                float: "right",
                fontSize: "small",
                margin: "0.3rem",
                marginRight: "1.6rem",
                cursor: "pointer",
              }}
              onClick={() => {
                navigation("/userNew");
              }}
            >
              New User
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
          {/* </Link> */}
        </div>
      </Box>
    </div>
  );
}
