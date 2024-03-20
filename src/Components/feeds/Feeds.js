import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import image from "../../assets/images/avatar.png";
import img1 from "../../assets/images/background/1.jpg";
import img2 from "../../assets/images/background/2.jpg";
import img3 from "../../assets/images/background/3.jpg";
import img4 from "../../assets/images/background/4.jpg";
import img5 from "../../assets/images/background/5.jpg";
import img6 from "../../assets/images/background/6.jpg";
import img7 from "../../assets/images/background/7.jpg";
import img8 from "../../assets/images/background/8.jpg";
import img9 from "../../assets/images/background/9.jpg";
import "./feeds.css"
import { AiOutlineLike } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { FaSlideshare } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { ImEnlarge2 } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
// import Picker from "emoji-picker-react";
import TextField from "@mui/material/TextField";
import InputEmoji from "react-input-emoji";
import { MdOutlineFileUpload } from "react-icons/md";
import axios, { CancelToken, isCancel } from "axios";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { config } from "../../Config";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FeedView from "./FeedView";
import Modal from "@mui/material/Modal";
import { Love, Hate, Fear, Happy, CryingFace } from "animated-emojis";
import { alpha, styled } from "@mui/material/styles";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";
// import Button from "@mui/material/Button";
// import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
// import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import {
  Dropzone,
  FileItem,
  FullScreenPreview,
  VideoPreview,
} from "@dropzone-ui/react";
import ReactDOM from "react-dom";
import { isEmpty } from "lodash";
import { useFilePicker } from "use-file-picker";
import { FaShareSquare } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import ReactPlayer from "react-player";
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import ReactMapboxGl, { Layer, Feature } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
var FormData = require("form-data");
// var fs = require("fs");
// var encode = require("encode-uri");
// var createObjectURL = require("create-object-url");
// const Map = ReactMapboxGl({
//   accessToken:
//     "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A",
// });
function SimpleDialog(props) {
  //alert(props);
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Settings</DialogTitle>
      <List sx={{ pt: 0 }}>
        {/* {emails.map((email) => (
          <ListItem disableGutters>
            <ListItemButton
              onClick={() => handleListItemClick(email)}
              key={email}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))} */}

        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });
const emails = ["username@gmail.com", "user02@gmail.com"];
export default function Feeds({bluroptions}) {
  const navigation = useNavigate();
  const [AllFeeds, setAllFeeds] = useState([]);
  const [pageNum, setpageNum] = useState([0]);
  const [uniqueChars, setuniqueChars] = useState([0]);
  const [limitRecords, setlimitRecords] = useState(20);
  const [isVisible, setisVisible] = useState(false);
  const [ConentLastText, setConentLastText] = useState("");
  const [getallFeeds, setgetallFeeds] = useState([]);
  const [scrollPosition, setPosition] = useState(0);
  const [scrollvalue, setscrollvalue] = useState(0);
  const [feedDetails, setfeedDetails] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [NewFeedPage, setNewFeedPage] = useState(false);
  const [text, setText] = useState("");
  const [ip, setIP] = useState("");
  const [EmojiAction, setEmojiAction] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [checkbackgroundNewFeed, setcheckbackgroundNewFeed] =
    useState("#ffffff");
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const [changecolorofField, setchangecolorofField] = useState("red");
  const [Files, setFiles] = useState([]);
  const [files, setfiles] = useState([]);
  const [totalFiles, settotalFiles] = useState([]);
  const [Progress, setProgress] = useState(0);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [emojismileAdd, setemojismileAdd] = useState("default");
  const [submitFeedValue, setsubmitFeedValue] = useState(false);
  const [offsetWidth, setoffsetWidth] = useState();
  const [offsetHeight, setoffsetHeight] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [ShareFeed, setShareFeed] = useState(false);
  const [bluroption, setbluroption] = useState(false);
  const [settingFeed, setsettingFeed] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const [videoSrc, setVideoSrc] = useState(undefined);
  const screenArray = [0];
  const titleRef = useRef();
  const cancelFileUpload = useRef(null);
  const userId = localStorage.getItem("userId");
  // const [openFileSelector, { filesContent, loading, errors, plainFiles }] =
  const { filesContent, loading, errors, plainFiles } =
    useFilePicker({
      multiple: true,
      readAs: "DataURL", // availible formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
      // accept: '.ics,.pdf',
      accept: ["*"],
      limitFilesConfig: { min: 0, max: 30000000000000000 },
      // minFileSize: 1, // in megabytes
      // maxFileSize: 1,
      // maxImageHeight: 1024, // in pixels
      // minImageHeight: 1024,
      // maxImageWidth: 768,
      // minImageWidth: 768
      // readFilesContent: false, // ignores file content
    });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    overflowY: "auto",
    overflowX: "hidden",
    p: 4,
  };
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  });
  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  const handleOpen = () => {
    console.log("true");
   // return false;
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setNewFeedPage(false);
  };
  const shareopen = (id) => {
    const resp_with_like = AllFeeds.map((item, key) => {
      if (item.feedId === id) {
        const y =
          item.sharefeedcheck === true
            ? { ...item, sharefeedcheck: false }
            : { ...item, sharefeedcheck: true };
        return y;
      } else {
        const y =
          item.sharefeedcheck === true
            ? { ...item, sharefeedcheck: false }
            : { ...item, sharefeedcheck: false };
        return y;
      }
    });
    console.log("first", id);
    setShareFeed(true);
    setAllFeeds(resp_with_like);
    setbluroption(true);
  };
  const updateFiles = (incommingFiles) => {
    if (Files.length > 0) {
      for (let index = 0; index < incommingFiles.length; index++) {
        //const element = event.target.files[index].type;
        const element = {
          type: incommingFiles[index].file.type,
          name: incommingFiles[index].file.name,
        };
        //   console.log(element);
        Files.push(incommingFiles[index].file);
        // files.push(event.target.files[index].name);
        settotalFiles([...totalFiles, element]);
        //   console.log(files);
      }
    } else {
      // console.log(event.target.files.length);
      for (let index = 0; index < incommingFiles.length; index++) {
        //console.log(incommingFiles[index].file.name);
        //const element = event.target.files[index].type;
        const element = {
          type: incommingFiles[index].file.type,
          name: incommingFiles[index].file.name,
        };
        // console.log(element);
        Files.push(incommingFiles[index].file);
        //files.push(event.target.files[index].name);
        settotalFiles([...totalFiles, element]);
        //console.log(files);
      }

      //console.log(Files);
    }
    console.log(incommingFiles);
    setfiles(incommingFiles);
    console.log(files.length)
    files.length > 6 ? showfileFlip():console.log("hello");
  };
  const showfileFlip = () => {
   
  }
  useEffect(() => {
    getData();
    fetchImages();
    //document.body.scrollTop = 0;
    window.addEventListener("scroll", handleScroll); // attaching scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageNum]);
  // setTimeout(() => {
  //   fetchImages();
  // }, 2000);
  var countoffeedsLenghth = "";
  const userToken = localStorage.getItem("token");
  const setStatePageNumber = () => {
    //  console.log(document.getElementById("content").ariaCurrent.offsetHeight);
    //  console.log(pageNum + limitRecords);
    //setpageNum(pageNum + limitRecords);
    pageNum.push(parseInt(uniqueChars[uniqueChars.length - 1] + limitRecords));
    //let uniqueChars = [];
    pageNum.forEach((c) => {
      if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
      }
    });
    //console.log(uniqueChars);
  };
  const checkingaction = async (action, id) => {
    // setemojismileAdd(action);
    const resp_with_like = AllFeeds.map((item, key) => {
      if (item.feedId === id) {
        // console.log(item.feedId);
        // console.log(id);
        const y =
          item.emojismileAdd === "default"
            ? { ...item, emojismileAdd: action, EmojiAction: false }
            : item.emojismileAdd !== "default"
            ? { ...item, emojismileAdd: action, EmojiAction: false }
            : { ...item, emojismileAdd: "default" };
        return y;
      } else {
        // const y = item.emojismileAdd
        //   ? { ...item, emojismileAdd: de }
        //   : { ...item, emojismileAdd: false };
        return item;
      }
    });
    setAllFeeds(resp_with_like);
    const AccessDetails = {
      emojismileAdd: action,
      feedId: id,
    };
    await axios.post(`${config.url}/api/emojismileAdd`, AccessDetails, {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    });

    
  };
  const handleOnEnter = (text, fridId) => {
    //console.log(messageList);
    // let ip_address = "192.168.10.60";
    // let socket_port = "3006";
    // let socket = io(ip_address + ":" + socket_port);
    // socket.emit("sendChatToServer", text);
    console.log(text);
    // console.log(socket);
    // console.log(socket.id);
    return false;
    //childRef.current.addMsgToList(text, fridId);

    // childRef.current.childFunction2();
    //   const messageto = await axios
    //     .post(
    //       `${config.url}/api/SendMessageToFriend`,
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
  const settingClose = async (id) => {
    const resp_with_like = AllFeeds.map((item, key) => {

      if (item.feedId === id) {
        // console.log(item.feedId);
        // console.log(id);
        const y = item.settingsFeed === true
          ? { ...item, settingsFeed: false }
          : { ...item, settingsFeed: true };
        //console.log(y);
        return y;
      } else {
        const y = item.settingsFeed === true
          ? { ...item, settingsFeed: false }
          : { ...item, settingsFeed: false };
        console.log(y);
        return y;
      }
    });
    setTimeout(() => {
      setAllFeeds(resp_with_like);
    }, 1000);
    const AccessDetails = {
      hide: true,
      user_id: userId,
      feedId: id,
    };
    await axios.post(`${config.url}/api/hideFeed`, AccessDetails, {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    });
  };
  const Settings = (id) => {
    const resp_with_like = AllFeeds.map((item, key) => {
      if (item.feedId === id) {
        const y = item.settingsFeed
          ? { ...item, settingsFeed: false }
          : { ...item, settingsFeed: true };
        return y;
      } else {
        const y = item.settingsFeed
          ? { ...item, settingsFeed: false }
          : { ...item, settingsFeed: false };
        return y;
      }
    });
    setTimeout(() => {
      setAllFeeds(resp_with_like);
      // bluroptions(true)
    }, 500);
  };
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };
  const fetchImages = async () => {
    // fetch images from Unsplash API and append them to imageObjects state
    //  console.log(uniqueChars[uniqueChars.length - 1]);
    setisVisible(false);
    const AccessDetails = {
      page: uniqueChars[uniqueChars.length - 1],
      SetLimit: limitRecords,
    };
    // console.log(userToken);
    let configData = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${config.url}/api/feeds`,
      headers: {
        Authorization: "Bearer " + userToken,
      },
    };
    await axios
      .request(configData)
      .then((response) => {
        console.log(response);
        if (response.data.data.length > 0) {
          // console.log(response);
          const resp = JSON.parse(JSON.stringify(response.data.data));
          const resp_with_like = resp.map((el) => {
            //  console.log(el);
            const ceckfinf =
              el.users !== undefined ? findObject(el.users) : null;
            //    console.log("first", ceckfinf);
            const yy =
              ceckfinf === null
                ? {
                    ...el,
                    like: false,
                    EmojiAction: false,
                    checkingLike: false,
                    sharefeedcheck: false,
                    settingsFeed: false,
                  }
                : {
                    ...el,
                    like: false,
                    EmojiAction: false,
                    checkingLike: ceckfinf,
                    sharefeedcheck: false,
                    settingsFeed: false,
                  };
            return yy;
          });
          // var getallFeeds = (AllFeeds) => {
          //   AllFeeds, resp_with_like;
          // };
          // resp_with_like.map((item) => {
          //   getallFeeds.push(item);
          // });
          // console.log(getallFeeds);

          //console.log(resp_with_like);

          if (AllFeeds.length == 0) {
            //console.log(AllFeeds.length);
            setAllFeeds((AllFeeds) => [...AllFeeds, ...resp_with_like]);
            //fetchImages();
          } else {
            setAllFeeds((AllFeeds) => [...AllFeeds, ...resp_with_like]);
          }

          // AllFeeds.length > 0
          //   ? setAllFeeds([...AllFeeds, ...resp_with_like])
          //   : setAllFeeds(resp_with_like);
          // AllFeeds.length === 0
          //   ? console.log("first " + AllFeeds.length)
          //   : console.log("Second " + AllFeeds.length);
          // AllFeeds.push(resp_with_like);
          //const FeedsListNEw = AllFeeds.concat(resp_with_like);
          //setAllFeeds(FeedsListNEw);
          // setisVisible(true);
          if (response.data.code === 200) {
            setStatePageNumber(); // Your function call
          }

          //setAllFeeds(getallFeeds);
          console.log(AllFeeds);
          //setStatePageNumber();
        } else {
          countoffeedsLenghth = response.data.data.length;
        }
      })
      // .then(() => {
      //   // const pagenumber = pageNum + 10;
      //   //  console.log(pagenumber);
      //   setStatePageNumber();
      //   //setpageNum(pagenumber);
      // })
      .catch((error) => {
        if (error.response.status === 401) {
          alert(error.response.data.message + " Access");
          navigation("/");
        }
      });
  };

  const loadiuhiprurthMore = () => {
    // setpageNum(pageNum + 1);
    const AccessDetails = {
      page: pageNum,
      SetLimit: limitRecords,
    };
    //   fetchFeedsList(AccessDetails, "second");
  };
  // const openTotalViewofFeed = (feed) => {
  //   // console.log(feed);

  // };
  const dislikenewFeed = async (id) => {
    const AccessDetails = {
      feedId: id,
      UserID: userId,
    };
    await axios
      .post(`${config.url}/api/CheckdisLikes`, AccessDetails, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      })
      .then((response) => {
        const resp_with_like = AllFeeds.map((item, key) => {
          if (item.feedId === id) {
            const y = item.checkingLike
              ? { ...item, likes: response.data.data, checkingLike: false }
              : { ...item, likes: response.data.data, checkingLike: true };
            return y;
          } else {
            return item;
          }
        });
        setTimeout(() => {
          setAllFeeds(resp_with_like);
        }, 1000);
      });
  };
  const likenewFeed = async (id) => {
    const resp_with_like = AllFeeds.map((item, key) => {
      if (item.feedId === id) {
        const y = item.checkingLike
          ? { ...item,  checkingLike: false }
          : { ...item,  checkingLike: true };
        return y;
      } else {
        return item;
      }
    });
    setAllFeeds(resp_with_like);
    const AccessDetails = {
      feedId: id,
      UserID: userId,
    };
    await axios
      .post(`${config.url}/api/CheckLikes`, AccessDetails, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      })
      .then((response) => {
        const resp_with_like = AllFeeds.map((item, key) => {
          if (item.feedId === id) {
            const y = item.checkingLike
              ? { ...item, likes: response.data.data, checkingLike: false }
              : { ...item, likes: response.data.data, checkingLike: true };
            return y;
          } else {
            return item;
          }
        });
        setTimeout(() => {
          setAllFeeds(resp_with_like);
        }, 1000);
      });
  };
  const emojiActionView = (id) => {
    const resp_with_like = AllFeeds.map((item, key) => {
      if (item.feedId === id) {
        // console.log(item.feedId);
        // console.log(id);
        const y = item.EmojiAction
          ? { ...item, EmojiAction: false }
          : { ...item, EmojiAction: true };
        return y;
      } else {
        const y = item.EmojiAction
          ? { ...item, EmojiAction: false }
          : { ...item, EmojiAction: false };
        return y;
      }
    });

    setAllFeeds(resp_with_like);
  };
  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (
      userScrollHeight - 152 ===
      document.getElementById("content").scrollHeight
    ) {
      if (countoffeedsLenghth !== 0) {
        fetchImages();
      } else {
        setisVisible(true);
        setConentLastText("You don't have Feeds");
      }
    }
  };
  const loadingView = () => {
    const loadingview = Array(10)
      .fill(1)
      .map((card, index) => {
        return (
          <Stack spacing={1} style={{ float: "left", margin: "1rem" }}>
            <Skeleton variant="text" width={250} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={250} height={218} />
          </Stack>
        );
      });
    return loadingview;
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const submitFeed = async () => {
    console.log(ip);
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");
    const email = localStorage.getItem("mibemail");
    const formData = new FormData();
    formData.append("data", userName);
    // Alert.alert(title);
    // Alert.alert(description);
    // return false;
    // console.log(files);
    // console.log(formData);
    console.log(Files.length);
    if (Files.length > 0) {
      Files.forEach((image, i) => {
        //console.log(image);
        //console.log(Platform.OS);
        //return false;
        formData.append("userId", userId);
        //  formData.append("title", title);
        formData.append("userName", userName);
        formData.append("email", email);
        formData.append("description", inputStr);
        formData.append("ipaddress", ip);
        formData.append("type", image.type);
        formData.append("uploadImage[]", image);
        //   {
        //   ...image,
        //   uri: image.name,
        //   // Platform.OS === "android"
        //   //   ? image.uri
        //   //   : image.uri.replace("file://", ""),
        //   name: `image-${i}`,
        //   type: image.type, // it may be necessary in Android.
        // });
      });
    } else {
      formData.append("userId", userId);
      //  formData.append("title", title);
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("ipaddress", ip);
      formData.append("description", inputStr);
      formData.append("type", image.type);
      formData.append("uploadImage[]", image);
    }
    // console.log(formData);
    //console.log(Files);
    // return false;
    //return false;
    //console.log(formData.getParts()[0].uri);
    //return false;
    // const userData = await axios.post(
    //   'http://' + config.ip + ':' + config.port + '/api/NewFeed',
    //   formData.getParts(),
    //   {
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'multipart/form-data',
    //       Authorization: 'Bearer ' + token,
    //       // 'X-CSRF-TOKEN': '{{ csrf_token() }}',
    //     },
    //   },
    // );
    //  console.log(object);
    console.log(formData);
    await axios({
      url: config.url + "/api/NewFeed",
      method: "POST",
      data: formData,
      headers: {
        Authorization: "Bearer " + token,
        //'Content-Type': 'application/json',
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        const progress = (progressEvent.loaded / progressEvent.total) * 100;
        //console.log(progressEvent.loaded / progressEvent.total);
        //console.log(progressEvent.total);
        setProgress(progress);
        setsubmitFeedValue(true);
      },
      CancelToken: new CancelToken(
        (cancel) => (cancelFileUpload.current = cancel)
      ),
      // onDownloadProgress: (progressEvent) => {
      //   const progress = 50 + (progressEvent.loaded / progressEvent.total) * 50;
      //   console.log(progress);
      //   setProgress(progress);
      // },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (isCancel(err)) {
          alert(err.message);
        }
      });
    // console.log('hello');
    // console.log(await userData.data);
  };
  const cancelUpload = () => {
    // alert(cancelFileUpload.current);
    if (cancelFileUpload.current) {
      //  alert(cancelFileUpload.current);
      cancelFileUpload.current("User has Cancel");
    }
  };
  const takedoc = async (event) => {
    //console.log(event);
    // setfiles(event.target.files);
    console.log(event.target.files[0]);
    console.log(event.target.files[1]);
    let duplicateFile = {};
    if (Files.length > 0) {
      //duplicateFile = files.find((doc) => console.log(doc.fileName)); //doc.fileName === Files.files[0].name);
      // if (isEmpty(duplicateFile)) {
      //   console.log("first");
      //   const currentFiles = Files;
      //   // console.log(Files.files[0].name);
      //   currentFiles.push({
      //     fileInput: Files.files,
      //     fileName: Files.files,
      //   });
      //   setFiles([...Files, { ...Files, currentFiles }]);
      //   console.log(Files);
      //   // this.setState(
      //   //   {
      //   //     files: currentFiles,
      //   //   },
      //   //   () => console.log(this.state.files)
      //   // );
      // }
      for (let index = 0; index < event.target.files.length; index++) {
        //const element = event.target.files[index].type;
        const element = {
          type: event.target.files[index].type,
          name: event.target.files[index].name,
        };
        console.log(element);
        Files.push(event.target.files[index]);
        files.push(event.target.files[index]);
        settotalFiles([...totalFiles, element]);
        console.log(files);
      }
    } else {
      // console.log(event.target.files.length);
      for (let index = 0; index < event.target.files.length; index++) {
        //const element = event.target.files[index].type;
        const element = {
          type: event.target.files[index].type,
          name: event.target.files[index].name,
        };
        console.log(element);
        Files.push(event.target.files[index]);
        files.push(event.target.files[index]);
        settotalFiles([...totalFiles, element]);
        console.log(files);
      }
      // setTimeout(() => {
      //   console.log(Files);
      // }, 3000);
      console.log(Files);
    }

    // Alert.alert('helllo');
    // const res = await DocumentPicker.pickMultiple({
    //   type: [DocumentPicker.types.allFiles],
    // });

    // res.map((item) => {
    //   //Files.push(item.uri);
    //   setFiles([...Files, { id: Files.length, url: item.uri }]);
    //   settotalFiles([...totalFiles, item]);
    //   // takedoc();
    // });
  };
  const CheckingEmoji = (emoji) => {};
  const convertImgToBase64 = (url, callback, outputFormat) => {
    var canvas = document.createElement("CANVAS");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL(outputFormat || "image/png");
      callback.call(this, dataURL);
      // Clean up
      canvas = null;
    };
    img.src = url;
  };
  const findObject = (arr, value) => {
    const element = arr.find((value) => {
      return value === parseInt(userId);
    });
    return typeof element === "undefined" ? false : true;
  };
  const hideFeed = (id)=>{
    const resp_with_like = AllFeeds.map((item, key) => {
    if (item.feedId === id) {
      const y = { ...item, hide: true };
      console.log(y);
      return y;
    } else {
      return item;
    }
  });
  setTimeout(() => {
    setAllFeeds(resp_with_like);
  }, 500);
  }
  const feedStatusView = (id) => {
    console.log(id);
  };
  const feedslist = AllFeeds.map((item, key) => {
    // const checkingLike =
    //   item.users !== undefined ? findObject(item.users) : null;
    //console.log(checkingLike);
    //const chekcinglike2 = parseInt(userId) === checkingLike ? "like" : "unlike";
    //  console.log(chekcinglike2);
    // console.log(AllFeeds.length);
    return (
      item.hide ? null:
      <Card
        key={key}
        style={{
          width: window.width / 4,
          margin: 5,
          float: "left",
          position: "relative",
        }}
        className="feedCard"
      >
        {item.uploadImage.length > 0 ? (
          <CardMedia style={{ height: 150, position: "relative" }}>
            {/* {console.log(item.uploadImage.sort((a, b) => b.height - a.height))} */}
            {item.uploadImage.map((imgItem, index) => {
              // return <div>{imgItem.uri}</div>;
              var filetype;
              var type = imgItem.type.split("/")[1];
              var typefile = imgItem.type.split("/")[0];
              if (type === "jpeg" || type === "jpg") {
                var filetype = "jpg";
              } else {
                var filetype = imgItem.type.split("/")[1];
              }

              // if (filetype == "mp4") {
              // }

              return (
                <div>
                  {/* {index < 6 ? (
                  { */}
                  {index < 4 ? (
                    <div data-index={index}>
                      {index === 0 ? (
                        imgItem.height > imgItem.width ? (
                          <div
                            style={{
                              display: "inline-flex",
                              // width: offsetWidth / 6,
                              // height: offsetHeight / 6,
                              width: "64.5%",
                              height: "17rem",
                              float: "left",
                              margin: 3,
                              padding: 1,
                              objectFit: "contain",
                              borderRadius: 5,
                              boxShadow: "0px 0px 1px #000",
                            }}
                          >
                            {convertImgToBase64(
                              config.url +
                                "/storage/images/" +
                                imgItem.uri +
                                "." +
                                filetype,
                              (dataUrl) => {
                                console.log("RESULT:", dataUrl);
                              }
                            )}
                            {typefile == "video" ? (
                              <video style={{ width: "100%" }} controls>
                                <source
                                  src={
                                    config.url +
                                    "/storage/images/" +
                                    imgItem.uri +
                                    "." +
                                    filetype
                                  }
                                  type="video/mp4"
                                />
                              </video>
                            ) : (
                              // eslint-disable-next-line jsx-a11y/alt-text
                              <img
                                src={imgItem.path}
                                //src={imgItem.path}
                                onLoad={({ target: img }) => {
                                  const { offsetHeight, offsetWidth } = img;
                                  console.log(offsetHeight, offsetWidth);
                                  setoffsetWidth(offsetWidth);
                                  setoffsetHeight(offsetHeight);
                                }}
                                style={{
                                  // width: offsetWidth,
                                  // height: offsetHeight,
                                  width: "100%",
                                  height: "100",
                                  float: "left",
                                  borderRadius: 5,
                                  margin: 1,
                                  padding: 1,
                                  objectFit: "fill",
                                }}
                              />
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "inline-flex",
                              // width: offsetWidth / 6,
                              // height: offsetHeight / 6,
                              width: "98%",
                              height: "10rem",
                              float: "left",
                              margin: 3,
                              padding: 1,
                              objectFit: "contain",
                              borderRadius: 5,
                              boxShadow: "0px 0px 1px #000",
                            }}
                          >
                            {convertImgToBase64(
                              config.url +
                                "/storage/images/" +
                                imgItem.uri +
                                "." +
                                filetype,
                              (dataUrl) => {
                                console.log("RESULT:", dataUrl);
                              }
                            )}
                            {typefile == "video" ? (
                              <video style={{ width: "100%" }} controls>
                                <source
                                  src={
                                    config.url +
                                    "/storage/images/" +
                                    imgItem.uri +
                                    "." +
                                    filetype
                                  }
                                  // src={imgItem.path}
                                  type="video/mp4"
                                />
                              </video>
                            ) : (
                              // eslint-disable-next-line jsx-a11y/alt-text
                              <img
                                src={imgItem.path}
                                //src={imgItem.path}
                                onLoad={({ target: img }) => {
                                  const { offsetHeight, offsetWidth } = img;
                                  setoffsetWidth(offsetWidth);
                                  setoffsetHeight(offsetHeight);
                                }}
                                style={{
                                  // width: offsetWidth,
                                  // height: offsetHeight,
                                  width: "100%",
                                  height: "100",
                                  float: "left",
                                  borderRadius: 5,
                                  margin: 1,
                                  padding: 1,
                                  objectFit: "fill",
                                }}
                              />
                            )}
                          </div>
                        )
                      ) : imgItem.height > imgItem.width ? (
                        <div
                          style={{
                            display: "inline-flex",
                            // width: offsetWidth / 6,
                            // height: offsetHeight / 6,
                            width: "31%",
                            height: "6rem",
                            float: "left",
                            margin: 3,
                            padding: 1,
                            objectFit: "contain",
                            borderRadius: 5,
                            boxShadow: "0px 0px 1px #000",
                          }}
                        >
                          {typefile == "video" ? (
                            <video style={{ width: "100%" }} controls>
                              <source
                                src={imgItem.path}
                                //src={imgItem.path}
                                type="video/mp4"
                              />
                            </video>
                          ) : (
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <img
                              src={
                                config.url +
                                "/storage/images/" +
                                imgItem.uri +
                                "." +
                                filetype
                              }
                              // src={imgItem.path}
                              onLoad={({ target: img }) => {
                                const { offsetHeight, offsetWidth } = img;
                                console.log(offsetHeight, offsetWidth);
                                setoffsetWidth(offsetWidth);
                                setoffsetHeight(offsetHeight);
                              }}
                              style={{
                                // width: offsetWidth,
                                // height: offsetHeight,
                                width: "100%",
                                height: "100",
                                float: "left",
                                borderRadius: 5,
                                margin: 1,
                                padding: 1,
                                objectFit: "fill",
                              }}
                            />
                          )}
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "inline-flex",
                            // width: offsetWidth / 6,
                            // height: offsetHeight / 6,
                            width: "31%",
                            height: "4rem",
                            float: "left",
                            margin: 3,
                            padding: 1,
                            objectFit: "contain",
                            borderRadius: 5,
                            boxShadow: "0px 0px 1px #000",
                          }}
                        >
                          {typefile == "video" ? (
                            <video style={{ width: "100%" }} controls>
                              <source
                                src={imgItem.path}
                                //src={imgItem.path}
                                type="video/mp4"
                              />
                            </video>
                          ) : (
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <img
                              src={
                                config.url +
                                "/storage/images/" +
                                imgItem.uri +
                                "." +
                                filetype
                              }
                              //src={imgItem.path}
                              onLoad={({ target: img }) => {
                                const { offsetHeight, offsetWidth } = img;
                                //  console.log(offsetHeight, offsetWidth);
                                setoffsetWidth(offsetWidth);
                                setoffsetHeight(offsetHeight);
                              }}
                              style={{
                                // width: offsetWidth,
                                // height: offsetHeight,
                                width: "100%",
                                height: "100",
                                float: "left",
                                borderRadius: 5,
                                margin: 1,
                                padding: 1,
                                objectFit: "fill",
                              }}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* }
                  :""} */}
                </div>
              );
            })}
            {item.uploadImage.length > 4 ? (
              <div
                style={{
                  width: "25%",
                  height: "50px",
                  float: "left",
                  margin: "6px",
                  padding: "1px",
                  objectFit: "contain",
                  backgroundColor: "rgb(70 70 70 / 62%)",
                  position: "absolute",
                  right: -1,
                  borderRadius: "5px",
                  opacity: 0.8,
                  top: "0rem",
                  textAlign: "center",
                  lineHeight: "3rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                {item.uploadImage.length - 4}+
              </div>
            ) : (
              ""
            )}{" "}
            {/* <img
            src={image}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          /> */}
          </CardMedia>
        ) : (
          ""
        )}
        <div style={{ clear: "both" }}></div>
        <CardHeader
          sx={{ padding: 1 }}
          avatar={
            <Avatar
              sx={{
                // bgcolor: red[500],
                fontSize: 12,
                width: "25px",
                height: "25px",
                mr: 0.05,
              }}
              aria-label="recipe"
              src={image}
            >
              R
            </Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              onClick={() => {
                Settings(item.feedId);
              }}
            >
              <MoreVertIcon />
            </IconButton>
          }
          subheaderTypographyProps={{ fontSize: 10 }}
          title={item.userName || item.username}
          subheader={new Date(item.created_at).toLocaleString()}
        />
        {item.settingsFeed ? (
          // <SimpleDialog
          //   selectedValue={item.feedId}
          //   open={item.settingsFeed}
          //   onClose={settingClose}
          // />
          <div className="mib-fed-setins">
            <div>View</div>
            <div>Follow</div>
            <div onClick={()=>{hideFeed(item.feedId)}}>Hide</div>
            <div>Delete</div>
          </div>
        ) : null}

        {/* <CardContent style={{ paddingBottom: 5 }}>
          <img
            src={image}
            style={{
              width: 20,
              height: 20,
              borderRadius: 15,
              float: "left",
            }}
          />
          <div style={{ float: "left", paddingLeft: 5, fontSize: 14 }}>
            Rajsekhar posted{" "}
          </div>
          {/* <div style={{ float: "right", paddingLeft: 5 }}>:</div> 
          <BiDotsVerticalRounded
            size={18}
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => {
              feedStatusView(item.feedId);
            }}
          />
          <div style={{ clear: "both" }}></div>
        </CardContent> */}
        {/* <CardContent
          style={{
            maxHeight: 200,
            overflow: "auto",
            fontFamily: "inherit",
            fontSize: 14,
            textAlign: "justify",
            textIndent: 30,
            padding: "0.1rem 0.5rem",
          }}
        > */}
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            maxHeight: 200,
            overflow: "auto",
            textAlign: "justify",
            fontSize: "0.85rem",
            padding: "0.1rem 0.5rem",
          }}
        >
          {item.description}
        </Typography>
        {/* {item.users.forEach((element) => {
            console.log(element);
          })} */}
        {/* </CardContent> */}
        <CardActions
          style={{
            boxShadow: "0px 0px 5px #0000001c inset",
            justifyContent: "space-between",
          }}
        >
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
                    ? dislikenewFeed(item.feedId)
                    : likenewFeed(item.feedId);
                }}
              />
            </IconButton>
            <sup className="feedLikesCount">{item.likes}</sup>
          </div>
          <div
            style={{
              marginLeft: 0,
              cursor: "pointer",
              width: "25px",
              height: "21px",
              position: "relative",
              // left: "0.9rem",
            }}
            className="addsmileAction"
            onClick={() => {
              //setEmojiAction(true);
              emojiActionView(item.feedId);
            }}
          >
            {/* {item.emojismileAdd === "default" ? ( */}
            {item.emojismileAdd === "default" ? (
              <BsEmojiSmile
                size={14}
                style={{ position: "relative", top: "0.15rem", left: "0.2rem" }}
              />
            ) : item.emojismileAdd === "love" ? (
              <Love
                size={1.5}
                onClick={() => {
                  CheckingEmoji("love");
                }}
              />
            ) : item.emojismileAdd === "hate" ? (
              <Hate size={1.5} />
            ) : item.emojismileAdd === "fear" ? (
              <Fear size={1.5} />
            ) : item.emojismileAdd === "happy" ? (
              <Happy size={1.5} />
            ) : item.emojismileAdd === "crying" ? (
              <CryingFace size={1.5} />
            ) : (
              <BsEmojiSmile
                size={14}
                style={{ position: "relative", top: "0.15rem", left: "0.2rem" }}
              />
            )}
          </div>
          {item.EmojiAction ? (
            <div
              style={{
                display: "flex",
                padding: "20px 20px 5px 51px",
                alignItems: "center",
                justifyContent: "space-between",
                position: "absolute",
                marginBottom: "4rem",
              }}
              className="animationemojisList"
            >
              <div
                onClick={() => {
                  checkingaction("love", item.feedId);
                }}
                style={{ cursor: "pointer", width: "35px", height: "25px" }}
              >
                <Love size={2} style={{ cursor: "pointer" }} />
              </div>
              <div
                onClick={() => {
                  checkingaction("hate", item.feedId);
                }}
                style={{ cursor: "pointer", width: "35px", height: "25px" }}
              >
                <Hate size={2} />
              </div>
              <div
                onClick={() => {
                  checkingaction("fear", item.feedId);
                }}
                style={{ cursor: "pointer", width: "35px", height: "25px" }}
              >
                <Fear size={2} />
              </div>
              <div
                onClick={() => {
                  checkingaction("happy", item.feedId);
                }}
                style={{ cursor: "pointer", width: "35px", height: "25px" }}
              >
                <Happy size={2} />
              </div>
              <div
                style={{ cursor: "pointer", width: "35px", height: "25px" }}
                onClick={() => {
                  checkingaction("crying", item.feedId);
                }}
              >
                <CryingFace size={2} />
              </div>
            </div>
          ) : null}
          <Badge badgeContent={100} onClick={() => {
                handleOpen();
                setfeedDetails(item);
              }}
              style={{
                marginTop: "8px",
                cursor: "pointer",
              }}
              >
            <BiComment
              size={15}
             
             
            />
          </Badge>
          <div
            style={{
              marginLeft: "20px",
              cursor: "pointer",
              width: "25px",
              height: "21px",
              position: "relative",
              // left: "0.9rem",
            }}
          >
            <FaShareSquare
              size={16}
              style={{
                marginTop: "6px",
                cursor: "pointer",
              }}
              onClick={() => {
                shareopen(item.feedId);
              }}
            />
            <div style={{ position: "absolute" }}>
              {item.sharefeedcheck ? (
                ShareFeed ? (
                  <sup
                    style={{
                      position: "relative",
                      width: "15rem",
                      height: "15rem",
                      background: "rgb(255, 255, 255)",
                      boxShadow: "0px 0px 5px",
                      top: "5rem",
                      borderRadius: "5px",
                      marginLeft: "9rem",
                      zIndex: "999999999",
                    }}
                  >
                    {item.feedId}
                  </sup>
                ) : null
              ) : null}
            </div>
          </div>
          {/* <BsInfoCircle
            size={16}
            style={{ marginTop: "6px", }}
            onClick={() => {
              // console.log(item);
              //openTotalViewofFeed(item);
              handleOpen();
              setfeedDetails(item);
            }}
          /> */}
          <ImEnlarge2
            size={14}
            style={{
              marginTop: "6px",
              cursor: "pointer",
            }}
            onClick={() => {
              // console.log(item);
              //openTotalViewofFeed(item);
              handleOpen();
              setfeedDetails(item);
            }}
          />
        </CardActions>
      </Card>
    );
  });
  const switchCondition = (param) => {
    switch (param) {
      case "default":
        return "<BsEmojiSmile size='20'>";
      default:
        return "<BsEmojiSmile size='20'>";
    }
  };
  const handleCancel = () => setPreviewOpen(false);
  const handleDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const handleWatch = (vidSrc) => {
    console.log("handleWatch", vidSrc);
    setVideoSrc(vidSrc);
  };
  const handleClean = (files) => {
    console.log("list cleaned", files);
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const updateParentState = (newState)=>{
    console.log(newState);
    setAllFeeds(newState)
  }
  const project = () => {
    switch (emojismileAdd) {
      case "love":
        return <Love />;
      case "hate":
        return <Hate />;
      case "fear":
        return <Fear />;
      case "happy":
        return <Happy />;
      case "crying":
        return <CryingFace />;
      default:
        return (
          <div>
            <BsEmojiSmile size="20" />
          </div>
        );
    }
  };
  return (
    <div style={{ paddingBottom: "2rem" }}>
      <div
        style={{
          width: "100%",
          paddingBottom: "5rem",
          float: "left",
        }}
        id="content"
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FeedView props={feedDetails} updateParentState={updateParentState} />
          </Box>
        </Modal>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <Masonry columnsCount={4} gutter="1px">
            {feedslist.length > 0 ? feedslist : loadingView()}
          </Masonry>
        </ResponsiveMasonry>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            margin: "auto",
            left: "45%",
            right: "51%",
            width: "55px",
            padding: "1rem",
            textAlign: "center",
            background: "#fff",
            border: "1px solid #0c0c0c4d",
            borderRadius: "6rem",
            fontWeight: "bolder",
            boxShadow: "0px 0px 5px #000",
            cursor: "pointer",
          }}
          title="Add New Feed"
          onClick={() => {
            setNewFeedPage(true);
          }}
        >
          +
        </div>

        <Modal
          open={NewFeedPage}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="newFeedClass"
        >
          {submitFeedValue === true ? (
            <Box
              sx={{
                width: "50%",
                position: "relative",
                height: "20px",
                background: "#eeeeee",
                padding: "1rem",
                top: "12rem",
                margin: "auto",
                padding: "7rem",
                borderRadius: "5px",
              }}
            >
              <LinearProgress variant="determinate" value={Progress} />
              <GiCancel
                onClick={() => {
                  cancelUpload();
                }}
                style={{ cursor: "pointer" }}
              />
            </Box>
          ) : (
            <Box
              sx={style}
              style={{
                width: "50%",
                border: "none",
                borderRadius: "5px",
                paddingTop: "0.5rem",
                top: "40%",
                height: "60vh",
                overflow: "hidden",
                background: checkbackgroundNewFeed,
              }}
              className="newwFeedClassBox"
            >
              <h3>New Feed</h3>
              {/* <InputEmoji
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={() => {
                handleOnEnter(text, userId);
              }}
              height={40}
              fontSize="12px"
              placeholder="Type a message"
            /> */}
              <div
                style={{
                  height: "300px",
                  width: "100%",
                  overflow: "hidden",
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    padding: "0.5rem",
                    background: "#fff",
                    borderRadius: "0.5rem",
                  }}
                >
                  <TextField
                    className="input-style"
                    value={inputStr}
                    label="Type Your Message"
                    multiline
                    //color={changecolorofField}
                    color={"secondary"}
                    maxRows={4}
                    style={{ fontSize: "small" }}
                    onChange={(e) => setInputStr(e.target.value)}
                  />

                  {/* <CssTextField
                label="Custom CSS"
                id="custom-css-outlined-input"
                onChange={(e) => setInputStr(e.target.value)}
                value={inputStr}
              /> */}

                  <div className="picker-container">
                    {showPicker &&
                      // <Picker
                      //   pickerStyle={{ width: "100%" }}
                      //   onEmojiClick={onEmojiClick}
                      // />
                      null}
                  </div>
                  <div style={{ textAlign: "right", marginTop: "0.2rem" }}>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#FFFFFF",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #000",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#C0C0C0",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#808080",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#000000",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#FF0000",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#800000",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#FFFF00",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#808000",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#00FF00",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#008000",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#00FFFF",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#008080",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#0000FF",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#000080",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#FF00FF",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#800080",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setcheckbackgroundNewFeed(
                          "0% 0% / 100% 100% no-repeat fixed #800080"
                        );
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "url(" + img1 + ")",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setcheckbackgroundNewFeed(
                          "0% 0% / 100% 100% no-repeat fixed url(" + img1 + ")"
                        );
                        setchangecolorofField("primary");
                      }}
                    ></div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "url(" + img2 + ")",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                      onClick={() => {
                        setcheckbackgroundNewFeed(
                          "0% 0% / 100% 100% no-repeat fixed url(" + img2 + ")"
                        );
                        setchangecolorofField("primary");
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "url(" + img3 + ")",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                      onClick={() => {
                        setcheckbackgroundNewFeed(
                          "0% 0% / 100% 100% no-repeat fixed url(" + img3 + ")"
                        );
                        setchangecolorofField("primary");
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "url(" + img4 + ")",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                      onClick={() => {
                        setcheckbackgroundNewFeed(
                          "0% 0% / 100% 100% no-repeat fixed url(" + img4 + ")"
                        );
                        setchangecolorofField("primary");
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "url(" + img5 + ")",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                      onClick={() => {
                        setcheckbackgroundNewFeed(
                          "0% 0% / 100% 100% no-repeat fixed url(" + img5 + ")"
                        );
                        setchangecolorofField("primary");
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "url(" + img6 + ")",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                      onClick={() => {
                        setcheckbackgroundNewFeed(
                          "0% 0% / 100% 100% no-repeat fixed url(" + img6 + ")"
                        );
                        setchangecolorofField("primary");
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "url(" + img7 + ")",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                      onClick={() => {
                        setcheckbackgroundNewFeed(
                          "0% 0% / 100% 100% no-repeat fixed url(" + img7 + ")"
                        );
                        setchangecolorofField("primary");
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "url(" + img8 + ")",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                      onClick={() => {
                        setcheckbackgroundNewFeed(
                          "0% 0% / 100% 100% no-repeat fixed url(" + img8 + ")"
                        );
                        setchangecolorofField("primary");
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "url(" + img9 + ")",
                        float: "left",
                        borderRadius: "1rem",
                        border: "2px solid #fff",
                      }}
                      onClick={() => {
                        setcheckbackgroundNewFeed(
                          "0% 0% / 100% 100% no-repeat fixed url(" + img9 + ")"
                        );
                        setchangecolorofField("primary");
                      }}
                    ></div>
                    <img
                      className="emoji-icon"
                      alt="true"
                      src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                      onClick={() => setShowPicker((val) => !val)}
                    />
                    <div
                      style={{
                        width: "20px",
                        float: "left",
                        marginLeft: "1rem",
                        height: "20px",
                      }}
                    >
                      <input
                        type="file"
                        name="file"
                        onChange={takedoc}
                        // ref={(input) => {
                        //   Files = input;
                        // }}
                        multiple
                        style={{
                          opacity: 0,
                          position: "absolute",
                          width: "20px",
                          height: "20px",
                          float: "left",
                          /* margin-left: 1rem; */
                          cursor: "pointer",
                        }}
                      />
                      <MdOutlineFileUpload
                        size={20}
                        onClick={() => {
                          alert("hello");
                        }}
                      />
                      <Dropzone
                        onChange={updateFiles}
                        value={files}
                        style={{
                          minHeight: "35px",
                          maxHeight: "35px",
                          paddingTop: "2rem",
                        }}
                      ></Dropzone>
                    </div>
                    <>
                    {/* <div className="flipBg"></div> */}
                    {/* <div className="showflipAlert">
                      <div>Create like Album from your images</div>
                      <div>
                      <span className="flip-btn"><input type="radio" className="" name="album"/>Yes</span>
                      <span className="flip-btn"><input type="radio" className="" name="album"/>No</span>
                      </div>
                      <div className="btn-list">
                      <div className="preview-btn">
                        Preview
                      </div>
                      <div className="preview-btn">
                        Close
                      </div>
                      </div>
                    </div> */}
                    </>
                    
                    {/* <div>
                    <button onClick={() => openFileSelector()}>
                      Select file{" "}
                    </button>
                    {plainFiles.map((file) => (
                      <div key={file.name}>{file.name}</div>
                    ))}
                  </div> */}
                    <div
                      style={{
                        overflowY: "auto",
                        maxHeight: 200,
                        minHeight: 0,
                      }}
                    >
                      {/* <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={files}
                        onPreview={handlePreview}
                        onChange={handleChange}
                      >
                        {files.length >= 8 ? null : uploadButton}
                      </Upload> */}
                      {/* {Files.map((file) => {
                        console.log(file.name);
                      })} */}
                      {files.map((file) => (
                        <>
                          <FileItem
                            {...file}
                            style={{ width: "80px", float: "left" }}
                            onDelete={handleDelete}
                            onSee={handleSee}
                            //localization={"ES-es"}
                            resultOnTooltip
                            onWatch={handleWatch}
                            preview
                            info
                            hd
                          />
                          <FullScreenPreview
                            imgSource={imageSrc}
                            openImage={imageSrc}
                            onClose={(e) => handleSee(undefined)}
                          />
                          <VideoPreview
                            videoSrc={videoSrc}
                            openVideo={videoSrc}
                            onClose={(e) => handleWatch(undefined)}
                            controls
                            autoplay
                          />
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 180,
                    overflowY: "auto",
                    overflowX: "hidden",
                  }}
                ></div>
              </div>
              <div style={{ width: "100%", textAlign: "right" }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    submitFeed();
                  }}
                >
                  Submit
                </Button>
              </div>
            </Box>
          )}
        </Modal>
      </div>
      {isVisible ? (
        <div style={{ fontSize: "16px", textAlign: "center" }}>
          {ConentLastText}
        </div>
      ) : (
        <Stack
          sx={{ color: "grey.500" }}
          spacing={2}
          direction="row"
          style={{ margin: "auto", width: "100px", marginTop: "40vh" }}
        >
          <CircularProgress color="inherit" />
        </Stack>
      )}
      {bluroption ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#00000042",
            position: "fixed",
            left: 0,
            zIndex: 999,
            top: 0,
          }}
          onClick={() => {
            setShareFeed(false);
            setbluroption(false);
          }}
        ></div>
      ) : null}

    </div>
  );
}
