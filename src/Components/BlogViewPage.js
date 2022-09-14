import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Base64 } from "js-base64";
import PageBuilder from "./pagebuilder";
import { FaHome } from "react-icons/fa";
export default function BlogViewPage() {
  const navigation = useNavigate();
  const [treeData, settreeData] = useState([
    { title: "Chicken", children: [{ title: "Egg" }] },
    { title: "Fish", children: [{ title: "fingerline" }] },
  ]);
  const uselocation = useLocation().search;
  const name = new URLSearchParams(uselocation).get("name");
  const handleClose = (url) => {
    //setAnchorEl(null);
    // alert(url);
    navigation("/" + url);
  };
  return (
    <>
      {/* <div style={{ width: "100%", height: 60 }}>
        {Base64.decode(Base64.decode(name))}
      </div> */}
      <FaHome
        color="#909090"
        style={{
          position: "absolute",
          zIndex: 9,
          left: "115px",
          cursor: "pointer",
          top: "8px",
        }}
        size={18}
        onClick={() => {
          handleClose("newgrid");
        }}
      />
      <PageBuilder props={Base64.decode(Base64.decode(name))} />
    </>
  );
}
