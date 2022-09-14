import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { config } from "../Config";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputEmoji from "react-input-emoji";
export default function FeedView({ props }) {
  console.log(props);
  const [stringLengthState, setstringLengthState] = useState(200);
  const [SlideImages, setSlideImages] = useState([]);
  const [text, setText] = useState("");
  const imageslist = props.uploadImage.map((item, index) => {
    var filetype;
    var type = item.type.split("/")[1];
    if (type === "jpeg") {
      var filetype = "jpg";
    }
    const images = {
      url:
        "http://" +
        config.ip +
        ":" +
        config.port +
        "/storage/images/" +
        item.uri +
        "." +
        filetype,
    };
    return images;
  });
  console.log(imageslist);
  const handleOnEnter = (text, fridId) => {
    //console.log(messageList);
    // let ip_address = "192.168.10.60";
    // let socket_port = "3006";
    // let socket = io(ip_address + ":" + socket_port);
    // socket.emit("sendChatToServer", text);
    // console.log(text);
    // console.log(socket);
    // console.log(socket.id);
    // return false;
    // childRef.current.addMsgToList(text, fridId);
    // childRef.current.childFunction2();
    //   const messageto = await axios
    //     .post(
    //       `http://${config.ip}:${config.port}/api/SendMessageToFriend`,
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
  //   setSlideImages((SlideImages) => [...SlideImages, ...imageslist]);
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      {/* <div>{props.feedId}</div> */}
      <div style={{ width: "55%", float: "left" }}>
        {imageslist.length === 0 ? null : (
          <div
            style={{
              overflowy: "auto",
              height: "85vh",
              borderRight: "4px double #80808026",
            }}
          >
            <SimpleImageSlider
              width={window.innerWidth * 0.4}
              height={window.innerHeight * 0.8}
              images={imageslist}
              // showBullets={true}
              showNavs={true}
            />
          </div>
        )}
      </div>
      <div
        style={{
          float: "left",
          width: "45%",
          padding: "10px",
          overflowy: "auto",
        }}
      >
        {props.userName}
        <div
          style={{
            fontSize: "small",
            textAlign: "justify",
            overflowY: "auto",
            padding: "0.5rem",
            border: "1px solid #80808033",
            borderRadius: "5px",
            minHeight: "0vh",
            maxHeight: "30vh",
          }}
        >
          {props.description !== null ? (
            props.description.length >= 200 ? (
              <div>
                {props.description.slice(0, stringLengthState)}
                {stringLengthState <= 200 ? (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setstringLengthState(props.description.length);
                    }}
                  >
                    ... show more
                  </span>
                ) : null}
              </div>
            ) : (
              props.description
            )
          ) : null}
        </div>
        <div>{props.userId}</div>
        <div>{props.likes}</div>
        <div>{props.like}</div>
        <div>
          {/* <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box> */}
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={() => {
              handleOnEnter(text, "hel");
            }}
            fontSize="12px"
            placeholder="Type a message"
          />
        </div>
      </div>
    </div>
  );
}
