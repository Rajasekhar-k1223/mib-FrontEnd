import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import background from "../assets/images/backgroundLogin.jpg";
import social from "../assets/images/5551.jpg";
import mails from "../assets/images/64666.jpg";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles, styled } from "@mui/styles";
import axios from "axios";
import { config } from "../Config";
const useStyles = makeStyles((theme) => ({
  input: {
    "&.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
      lineHeight: "0.9rem",
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      textAlign: "right",
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      textAlign: "right",
    },

    "& .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root": {
      transformOrigin: "top left",
      left: "auto",
      right: 8,
    },

    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      left: "auto",
      right: 20,
      lineHeight: "0.8rem",
    },
  },
}));
export default function UserNew() {
  const [username, setusername] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [passwordShow, setpasswordShow] = useState("password");
  const [passShow, setpassShow] = useState(false);
  const [confpassword, setconfpassword] = useState("");
  const [confpasswordShow, setconfpasswordShow] = useState("password");
  const [confpassShow, setconfpassShow] = useState(false);
  const [LabelColor, setLabelColor] = useState("");
  const [dateofbirth, setdateofbirth] = useState(null);
  const [gender, setgender] = useState("");
  const [mobile, setmobile] = useState(null);
  const SignupAccount = () => {
    const userData = {
      username: username,
      firstname: firstname,
      lastname: lastname,
      password: password,
      dateofbirth: dateofbirth,
      gender: gender,
      mobile: mobile,
    };
    axios.post(config.url + "/api/newUser", userData).then((response) => {
      console.log(response);
    });
  };
  const handleChangeGender = (event) => {
    setgender(event.target.value);
  };

  const handleChange = (newValue) => {
    setdateofbirth(newValue);
  };
  const checkingUserName = (event) => {
    const result = event.target.value.replace(/[^a-z0-9_.]/gi, "");

    setusername(result);
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
            <TextField
              id="outlined-username"
              type="text"
              label="First Name"
              style={{ width: "80%" }}
              InputProps={{
                style: { height: 42 },
              }}
              InputLabelProps={{
                style: { height: 42, lineHeight: "0.9rem", fontSize: "0.8rem" },
              }}
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            <TextField
              id="outlined-username"
              type="text"
              label="Last Name"
              style={{ width: "80%" }}
              InputProps={{
                style: { height: 42 },
              }}
              InputLabelProps={{
                style: { height: 42, lineHeight: "0.9rem", fontSize: "0.8rem" },
              }}
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
            <TextField
              id="outlined-username"
              type="text"
              label="User name"
              style={{ width: "80%" }}
              InputProps={{
                style: { height: 42 },
              }}
              InputLabelProps={{
                style: { height: 42, lineHeight: "1rem", fontSize: "0.9rem" },
              }}
              value={username}
              //onChange={(e) => setusername(e.target.value)}
              onChange={(e) => checkingUserName(e)}
            />
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
                // onKeyDown={(event) => {
                //   return event.keyCode === 13 ? LoginAccount() : null;
                // }}
                InputProps={{
                  style: { height: 42, paddingRight: "1rem" },
                }}
                InputLabelProps={{
                  style: {
                    height: 42,
                    lineHeight: "1rem",
                    fontSize: "0.9rem",
                  },
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
            <div style={{ position: "relative" }}>
              <TextField
                id="outlined-password-input"
                label=" Conf-Password"
                type={confpasswordShow}
                autoComplete="current-password"
                style={{
                  width: "80%",
                  marginBottom: "0.3rem",
                  background: LabelColor,
                  borderRadius: "5px",
                }}
                // onKeyDown={(event) => {
                //   return event.keyCode === 13 ? LoginAccount() : null;
                // }}
                InputProps={{
                  style: { height: 42, paddingRight: "1rem" },
                }}
                InputLabelProps={{
                  style: {
                    height: 42,
                    lineHeight: "1rem",
                    fontSize: "0.9rem",
                  },
                }}
                value={confpassword}
                onChange={(e) => setconfpassword(e.target.value)}
              />
              {confpassShow ? (
                <div
                  onClick={() => {
                    setconfpasswordShow("password");
                    setconfpassShow(false);
                  }}
                  className="passwordShoworHide"
                >
                  <AiOutlineEyeInvisible />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setconfpasswordShow("text");
                    setconfpassShow(true);
                  }}
                  className="passwordShoworHide"
                >
                  <AiOutlineEye />
                </div>
              )}
            </div>
            <FormControl sx={{ width: "80%", marginTop: "0.8rem" }}>
              <InputLabel id="demo-simple-select-helper-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={gender}
                label="Gender"
                onChange={handleChangeGender}
                style={{
                  width: "100%",
                  marginBottom: "0.3rem",
                  background: LabelColor,
                  borderRadius: "5px",
                  height: 42,
                  paddingTop: 0,
                  textAlign: "left",
                }}
                className={useStyles.input}
                // onKeyDown={(event) => {
                //   return event.keyCode === 13 ? LoginAccount() : null;
                // }}
                // InputProps={{
                //   style: { height: 42, paddingRight: "1rem" },
                // }}
                // InputLabelProps={{
                //   style: {
                //     height: 42,
                //     lineHeight: "0.8rem",
                //     fontSize: "0.9rem",
                //   },
                //}}
              >
                <MenuItem value="Select Gender">
                  <em>Select Gender</em>
                </MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date of Birth"
                inputFormat="MM/DD/YYYY"
                value={dateofbirth}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                style={{
                  width: "80%",
                  marginBottom: "0.3rem",
                  background: LabelColor,
                  borderRadius: "5px",
                }}
                InputProps={{
                  style: {
                    height: 42,
                    paddingRight: "1rem",
                    paddingTop: "0.5rem",
                    lineHeight: "0.9em",
                  },
                }}
                InputLabelProps={{
                  style: {
                    height: 42,
                    lineHeight: "0.9em",
                    fontSize: "0.8rem",
                    paddingTop: "0.5rem",
                  },
                  shrink: true,
                }}
              />
            </LocalizationProvider>
            <TextField
              id="outlined-number"
              type="number"
              label="Mobile Number"
              style={{ width: "80%" }}
              InputProps={{
                style: { height: 42 },
              }}
              InputLabelProps={{
                style: { height: 42, lineHeight: "1rem", fontSize: "0.9rem" },
              }}
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
            />
          </div>

          <Stack
            direction="row"
            spacing={1}
            style={{ width: 115, margin: "auto" }}
          >
            <Button
              variant="contained"
              style={{ width: 115, fontSize: "small" }}
              endIcon={<SendIcon />}
              onClick={() => {
                SignupAccount();
              }}
            >
              Submit
            </Button>
          </Stack>
        </div>
      </Box>
    </div>
  );
}
