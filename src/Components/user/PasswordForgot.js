import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import background from "../../assets/images/backgroundLogin.jpg";
import social from "../../assets/images/5551.jpg";
import mails from "../../assets/images/64666.jpg";
export default function PasswordForgot() {
  const [username, setusername] = useState("");
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
              label="User name"
              style={{ width: "80%" }}
              InputProps={{
                style: { height: 42 },
              }}
              InputLabelProps={{
                style: { height: 42, lineHeight: "0.9rem", fontSize: "0.8rem" },
              }}
              value={username}
              onChange={(e) => setusername(e.target.value)}
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
              //   onClick={() => {
              //     LoginAccount();
              //   }}
            >
              Submit
            </Button>
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
        </div>
      </Box>
    </div>
  );
}
