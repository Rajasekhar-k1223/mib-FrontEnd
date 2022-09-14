import React from "react";
import image from "../assets/images/avatar.png";
import { RiExternalLinkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
// import { decode as base64_decode, encode as base64_encode } from "base-64";
import { Base64 } from "js-base64";
export default function RegNewApp({ props }) {
  const navigation = useNavigate();
  const selectAppView = (type, name) => {
    const appName = Base64.encodeURI(Base64.encodeURI(name));
    navigation("/" + type + ":?name=" + appName);
  };
  return props.map((item, index) => {
    return (
      <div className="appnew" key={index}>
        <img src={image} style={{ width: 35, margin: "0.5rem 1.5rem" }} />
        <div
          style={{
            fontSize: "small",
            textAlign: "center",
            cursor: "pointer",
          }}
          className="applinkView"
          onClick={() => {
            selectAppView(item.appType, item.appName);
          }}
        >
          {item.appName.length >= 10
            ? item.appName.substr(0, 8) + "..."
            : item.appName}
          <RiExternalLinkFill size={10} />
        </div>
        <div
          style={{
            fontSize: "xx-small",
            padding: "0.2rem",
          }}
        >
          <div style={{ float: "left", width: "40%", textAlign: "center" }}>
            <div>Likes</div>
            <div>25</div>
          </div>
          <div
            style={{
              float: "right",
              textAlign: "center",
              width: "55%",
            }}
          >
            <div>Followers</div>
            <div style={{ textAlign: "center" }}>100</div>
          </div>
        </div>
      </div>
    );
  });
}
