import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
} from "react";
import { config } from "../Config";
import axios from "axios";
import image from "../assets/images/avatar.png";
export const MessagesList = forwardRef((props, ref) => {
  const [messagesTotalList, setmessagesTotalList] = useState([]);
  const bottom = useRef(null);
  const msg = props;
  const FrdId = msg.frdid;
  const userToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const AccessDetails = {
    headers: {
      Authorization: "Bearer " + userToken,
      // "Content-Type": "application/json",
    },
    params: {
      from: userId,
      to: FrdId,
    },
  };
  useImperativeHandle(ref, () => ({
    childFunction1() {
      console.log("child function 1 called");
    },
    childFunction2() {
      console.log("child function 2 called");
    },
  }));
  useEffect(() => {
    getMsgs(FrdId);
    //bottom.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const getMsgs = async (FrdId) => {
    const r = await axios.get(
      `http://${config.ip}:${config.port}/api/GetMessagesFromFriends`,
      AccessDetails
    );
    console.log("r.data", r);
    const sorted_r = r.data;

    const msgResponse = sorted_r.data.map((ele) => {
      const y = { ...ele, friendId: FrdId };
      return y;
    });
    setmessagesTotalList(...messagesTotalList, msgResponse);
    // scrollToBottom();
    console.log(msgResponse);
  };

  return (
    <div>
      {messagesTotalList.map((messages, index) => {
        console.log(userId);
        return (
          <div key={index}>
            <div className={messages.from == userId ? "sender" : "receiver"}>
              <img
                src={image}
                style={{
                  width: "18px",
                  border: "4px solid #fff",
                  borderRadius: "3rem",
                  position: "relative",
                  left: messages.from == userId ? "9px" : "-9px",
                  bottom: "8px",
                  float: messages.from == userId ? "right" : "left",
                }}
              />
              <div
                style={{
                  float: "revert",
                  marginLeft: 2,
                  marginRight: 2,
                  width: "90%",
                }}
              >
                {messages.message}
              </div>
            </div>
            <div className="clear"></div>
            <div ref={bottom}></div>
          </div>
        );
      })}
    </div>
  );
});
