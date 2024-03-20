import React, { useState } from "react";
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import SimpleImageSlider from "react-simple-image-slider";
import { config } from "../../Config";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputEmoji from "react-input-emoji";
import axios, { CancelToken, isCancel } from "axios";
import IconButton from "@mui/material/IconButton";
import { AiFillHeart } from "react-icons/ai";
import { io } from "socket.io-client";
export default function FeedView({ props, updateParentState }) {
  // console.log(props);
  // return false;
  const [stringLengthState, setstringLengthState] = useState(200);
  const [SlideImages, setSlideImages] = useState([]);
  const [replyText,setreplyText] = useState()
  const [comments,setcomments] = useState(props.comments);
  const [text, setText] = useState("");
  const userToken = localStorage.getItem("token");
  const imageslist = props.uploadImage.map((item, index) => {
    var filetype;
    var type = item.type.split("/")[1];
    if (type === "jpeg") {
      var filetype = "jpg";
    }
    const images = {
      url: item.path,
    };
    return images;
  });
  const replycomment = (feedId,comntId,comntDesc) => {
    // console.log(comntId)
    // console.log(comntDesc)
    setreplyText(comntDesc)
  }
  const dislikenewFeed = async (id) => {
    // const AccessDetails = {
    //   feedId: id,
    //   UserID: userId,
    // };
    // await axios
    //   .post(`${config.url}/api/CheckdisLikes`, AccessDetails, {
    //     headers: {
    //       Authorization: "Bearer " + userToken,
    //     },
    //   })
    //   .then((response) => {
    //     const resp_with_like = AllFeeds.map((item, key) => {
    //       if (item.feedId === id) {
    //         const y = item.checkingLike
    //           ? { ...item, likes: response.data.data, checkingLike: false }
    //           : { ...item, likes: response.data.data, checkingLike: true };
    //         return y;
    //       } else {
    //         return item;
    //       }
    //     });
    //     setTimeout(() => {
    //       setAllFeeds(resp_with_like);
    //     }, 1000);
    //   });
  };
  const likenewFeed = async (id) => {
    // const resp_with_like = AllFeeds.map((item, key) => {
    //   if (item.feedId === id) {
    //     const y = item.checkingLike
    //       ? { ...item,  checkingLike: false }
    //       : { ...item,  checkingLike: true };
    //     return y;
    //   } else {
    //     return item;
    //   }
    // });
    // setAllFeeds(resp_with_like);
    // const AccessDetails = {
    //   feedId: id,
    //   UserID: userId,
    // };
    // await axios
    //   .post(`${config.url}/api/CheckLikes`, AccessDetails, {
    //     headers: {
    //       Authorization: "Bearer " + userToken,
    //     },
    //   })
    //   .then((response) => {
    //     const resp_with_like = AllFeeds.map((item, key) => {
    //       if (item.feedId === id) {
    //         const y = item.checkingLike
    //           ? { ...item, likes: response.data.data, checkingLike: false }
    //           : { ...item, likes: response.data.data, checkingLike: true };
    //         return y;
    //       } else {
    //         return item;
    //       }
    //     });
    //     setTimeout(() => {
    //       setAllFeeds(resp_with_like);
    //     }, 1000);
    //   });
  };
  // console.log("images")
  // console.log(props.uploadImage)
  // console.log(imageslist);
  const checkTimeZoneDate = (date)=>{
      // Parse the UTC date string
  const utcDate = parseISO(date);

  // Specify the target time zone
  const targetTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Change this to your desired time zone

  // Convert UTC to local time zone
  const localDate = utcToZonedTime(utcDate, targetTimeZone);

  // Format the local date as a string
  const formattedLocalDate = format(localDate, 'dd-MM-yyyy hh:mm a', {
    timeZone: targetTimeZone,
  });
  return formattedLocalDate;
  }
  const handleOnEnter = async (text) => {
    // console.log(props.feedId)
    // alert(Intl.DateTimeFormat().resolvedOptions().timeZone)
    console.log(text)
    const comment = {
      feedId:props.feedId,
      commentUserId: props.userId,
      commentUserName: props.userName,
      commentDescription: text,
    }
      await axios.post(`${config.url}/api/commentsByFeed`, comment, {
        headers: {
          Authorization: "Bearer " +userToken,
        },
      }).then((res) => {
        console.log(res);
        const commentnow = {
          feedId:props.feedId,
          commentUserId: props.userId,
          commentUserName: props.userName,
          commentDescription: text,
          created_at:new Date().toLocaleString(),
        }
        setcomments([...comments,commentnow])
        updateParentState(res.data.data);
      })
    //return false;
  };
  const handleOnReplayEnter = async (text) => {
    // console.log(props.feedId)
    // alert(Intl.DateTimeFormat().resolvedOptions().timeZone)
    console.log(text)
    const comment = {
      feedId:props.feedId,
      commentUserId: props.userId,
      commentUserName: props.userName,
      commentDescription: text,
    }
      await axios.post(`${config.url}/api/commentsByFeed`, comment, {
        headers: {
          Authorization: "Bearer " +userToken,
        },
      }).then((res) => {
        console.log(res);
        const commentnow = {
          feedId:props.feedId,
          commentUserId: props.userId,
          commentUserName: props.userName,
          commentDescription: text,
          created_at:new Date().toLocaleString(),
        }
        setcomments([...comments,commentnow])
        updateParentState(res.data.data);
      })
    //return false;
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
          position:"relative",
          height: "85vh",
        }}
      >
        {props.userName}
        <div>
          {props.description !== null  ? (
            props.description.length >= 200 ? (
              <div className="feed-data-show">
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
        {/* <div>{props.feedId}</div> */}
        <div
            style={{
              marginLeft: 0,
              cursor: "pointer",
              width: "25px",
              height: "25px",
              position: "relative",
              // left: "0.9rem",
            }}
          >
            <IconButton
              aria-label="add to favorites"
              style={{ position: "absolute" }}
            >
              <AiFillHeart
                size={14}
                // style={{ marginLeft: 5 }}
                className={props.checkingLike ? "heart" : "unlikeheart"}
                onClick={() => {
                  props.checkingLike
                    ? dislikenewFeed(props.commentId)
                    : likenewFeed(props.commentId);
                }}
              />
            </IconButton>
            <sup className="comnt-lks">{props.likes}</sup>
          </div>
        <div className="comnts-list">
          {console.log(comments)}
        {comments === undefined || comments === 0 ?"": comments.map((item)=>{
         return <div className="comnt-desc">
          <div>{item.commentDescription}</div>
         {/* {checkTimeZoneDate(item.created_at)} */}
         <div className="comnt-time">{checkTimeZoneDate(item.created_at)}</div>

         <div
            style={{
              marginLeft: 0,
              cursor: "pointer",
              width: "25px",
              height: "25px",
              position: "relative",
              // left: "0.9rem",
            }}
          >
            <IconButton
              aria-label="add to favorites"
              style={{ position: "absolute" }}
            >
              <AiFillHeart
                size={14}
                // style={{ marginLeft: 5 }}
                className={item.checkingLike ? "heart" : "unlikeheart"}
                onClick={() => {
                  item.checkingLike
                    ? dislikenewFeed(item.commentId)
                    : likenewFeed(item.commentId);
                }}
              />
            </IconButton>
            <sup className="comnt-lks">{props.likes}</sup>
          </div>

         <div onClick={()=>{replycomment(props.feedId,item.commentId,item.commentDescription)}} className="feed-comment-replay">Replay</div></div>;
        })}    
        </div>  
        {/* <div>{props.like}</div> */}
        <div style={{
         position: "absolute",
         bottom: "0px",
         width: "100%",
        }}>
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
        {replyText?
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={() => {
              handleOnReplayEnter(text);
            }}
            fontSize="12px"
            placeholder="Type a message"
          />:<InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={() => {
            handleOnEnter(text);
          }}
          fontSize="12px"
          placeholder="Type a message"
        />}
        </div>
      </div>
    </div>
  );
}
