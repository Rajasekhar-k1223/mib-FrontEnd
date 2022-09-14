import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import background from "../assets/images/backgroundLogin.jpg";
export default function PasswordForgot() {
  const [username, setusername] = useState("");
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: "cover",
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
        </div>
      </Box>
    </div>
  );
}
