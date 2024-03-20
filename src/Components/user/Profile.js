import React, { useState } from "react";
import "./userData.css";
import Header from "../Header";
import banner from "../../assets/images/banner.jpg";
import user from "../../assets/images/avatar.png";
import { RiExternalLinkFill } from "react-icons/ri";
import Draggable from 'react-draggable';
import { BiEdit } from "react-icons/bi";
import { BsLockFill } from "react-icons/bs";
import { BsUnlockFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import FriendsList from "../friends/FriendsList";
export default function Profile() {
  const [info, setinfo] = useState(true);
  const [Friends, setFriends] = useState(false);
  const [schoolLock, setschoolLock] = useState(true);
  const [studyLock, setstudyLock] = useState(true);
  const [workLock, setworkLock] = useState(true);
  const [addinfoLock, setaddinfoLock] = useState(true);
  const [infoshow, setinfoshow] = useState(true);
  const [addprofileMenu, setaddprofileMenu] = useState(false);
  const [changeBannerProfileImg,setchangeBannerProfileImg] = useState({
    bannerImgHeight:"7rem",
    userBannerImageChange:"16%",
    showHideUserData:"block",
    checkimageSize:false,
    EditProfileBtn:true,
    profilebgNew:0,
    bannerImg:banner,
    bannerImgFlow:"hidden",
    profileImg:"",
    bannerImgH:"100%"
  })
  const viewUserDetails = (id) => {
    alert(id);
  };
  const editProfileBanner=()=>{
    setchangeBannerProfileImg((prev)=>({
      ...prev,
    bannerImgHeight:"20rem",
    userBannerImageChange:"85%",
    showHideUserData:"none",
    bannerImgFlow:"auto",
    checkimageSize:true,
    EditProfileBtn:false,
    bannerImgH:"100%"
    }))
  }
  const saveProfileBanner=()=>{
    setchangeBannerProfileImg((prev)=>({
      ...prev,
      bannerImgHeight:"7rem",
      userBannerImageChange:"16%",
      showHideUserData:"block",
      bannerImgFlow:"hidden",
      checkimageSize:false,
      EditProfileBtn:true,
      bannerImgH:"100%"
    }))
  }
  const handleBannerChange = (e) => {
    console.log(e)
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setchangeBannerProfileImg((prev)=>({
          ...prev,bannerImg:reader.result,
          profilebgNew:reader.result.length
        }));
      };
      reader.readAsDataURL(file);
      console.log(changeBannerProfileImg.profileImg)
    }
  };
  const friends = () => {
    setinfo(false);
    setFriends(true);
  };
  const infopro = () => {
    setinfo(true);
    setFriends(false);
  };
  const updateUserProfilebyName = () => {
    const divElement = document.createElement("div");
    divElement.setAttribute("id", "profileId");
    divElement.setAttribute("class", "profileId");
    document.getElementById("profileIdsList").appendChild(divElement);
  };
  return (
    <div>
      <Header />
      <div className="MainSection">
        {addprofileMenu ? (
          <>
            {" "}
            <div
              style={{
                background: "rgb(0 0 0 / 45%)",
                width: "100%",
                height: "100vh",
                position: "fixed",
                zIndex: "9999",
              }}
              onClick={() => {
                addprofileMenu
                  ? setaddprofileMenu(false)
                  : setaddprofileMenu(true);
              }}
            ></div>
            <div
              style={{
                width: "50%",
                height: "50vh",
                position: "fixed",
                zIndex: "99999",
                background: "#fff",
                padding: "1rem",
                borderRadius: "5px",
                top: "30vh",
                left: "25vw",
              }}
            >
              Add New Profile tab header
              <input />
              <button
                onClick={() => {
                  updateUserProfilebyName();
                }}
              >
                Submit
              </button>
            </div>
          </>
        ) : null}
        <div className="userInfoSideMenu" style={{width:`${changeBannerProfileImg.userBannerImageChange}`}}>
          <div style={{ width: "100%", height:`${changeBannerProfileImg.bannerImgHeight}`, background: "#fff",textAlign:"center" }}>
            <div style={{height:`${changeBannerProfileImg.bannerImgHeight}`,overflowY:`${changeBannerProfileImg.bannerImgFlow}`}}>
              <Draggable axis="y">
                <img
                src={changeBannerProfileImg.bannerImg}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height:`${changeBannerProfileImg.bannerImgH}`
                  //height: `${bannerImgHeight}`,
                }}
               
              />
              </Draggable>
                </div>
            
            <img
              src={user}
              className={`userProfileImg-${changeBannerProfileImg.checkimageSize?'edit':'normal'}`}
            />
            {changeBannerProfileImg.EditProfileBtn?
            <BiEdit
              size={15}
              className="profileEditBtn"
              onClick={()=>{editProfileBanner()}}
            />:changeBannerProfileImg.profilebgNew > 0 ?<button className="profileEditBtn" onClick={saveProfileBanner}>Save</button>:<><div className="profileImgUpload"><input type="file"  onChange={handleBannerChange}/></div><div className="bannerImgUpload"><input type="file"  onChange={handleBannerChange}/></div></>}
          </div>
          <div
            className="userDetailsLink"
            onClick={() => {
              viewUserDetails(20);
            }}
          >
            #Rajasekhar <RiExternalLinkFill size={15} />
          </div>
          <div
            className="userProInfo"
            onClick={() => {
              infopro();
            }}
          >
            Info
          </div>
          <div
            className="userProInfo"
            onClick={() => {
              friends();
            }}
          >
            Friends
          </div>
          <div className="userProInfo">Messages</div>
          <div className="userProInfo">Feeds</div>
          <div className="userProInfo">Pages</div>
          <div className="userProInfo">Apps</div>
          <div className="userProInfo">Account Settings</div>
        </div>
        <div className="userInfoData" style={{display:`${changeBannerProfileImg.showHideUserData}`}}>
          {info ? (
            <div>
              <div
                style={{
                  padding: "0.5rem",
                  width: "6rem",
                  border: "1px solid rgb(97 218 251)",
                  textAlign: "center",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: "600",
                  background: "linear-gradient(176deg, #61dafb, transparent)",
                  color: "#000",
                  float: "right",
                  cursor: "pointer",
                }}
                onClick={() => {
                  addprofileMenu
                    ? setaddprofileMenu(false)
                    : setaddprofileMenu(true);
                }}
              >
                Add +
              </div>

              <div style={{ clear: "both" }}></div>
              <div id="profileIdsList">
                <div className="infoHeader">
                  Personal Info{" "}
                  <TiDeleteOutline
                    style={{ float: "right", marginLeft: 3, cursor: "pointer" }}
                  />
                  {schoolLock ? (
                    <BsLockFill
                      size="16"
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={() => {
                        setschoolLock(false);
                      }}
                    />
                  ) : (
                    <BsUnlockFill
                      size="16"
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={() => {
                        setschoolLock(true);
                      }}
                    />
                  )}
                </div>
                <div className="personalInfo">
                  <p>
                    <div style={{ width: 150, float: "left" }}>
                      User Name :{" "}
                    </div>
                    <div style={{ width: 150, float: "left" }}>Rajasekhar</div>
                    <div style={{ clear: "both" }}></div>
                  </p>
                  <p>
                    <div style={{ width: 150, float: "left" }}>
                      First Name :{" "}
                    </div>
                    <div style={{ width: 150, float: "left" }}>Rajasekhar</div>
                    <div style={{ clear: "both" }}></div>
                  </p>
                  <p>
                    <div style={{ width: 150, float: "left" }}>
                      Last Name :{" "}
                    </div>
                    <div style={{ width: 150, float: "left" }}>Rajasekhar</div>
                    <div style={{ clear: "both" }}></div>
                  </p>
                  <p>
                    <div style={{ width: 150, float: "left" }}>
                      Date of Birth :
                    </div>
                    <div style={{ width: 150, float: "left" }}>Rajasekhar</div>
                    <div style={{ clear: "both" }}></div>
                  </p>
                  <p>
                    <div style={{ width: 150, float: "left" }}>Email : </div>
                    <div style={{ width: 150, float: "left" }}>Rajasekhar</div>
                    <div style={{ clear: "both" }}></div>
                  </p>
                  <p>
                    <div style={{ width: 150, float: "left" }}>Address : </div>
                    <div style={{ width: 150, float: "left" }}>Rajasekhar</div>
                    <div style={{ clear: "both" }}></div>
                  </p>
                  <p>
                    <button>+Add</button>
                  </p>
                </div>
              </div>

            </div>
          ) : null}
          {Friends ? (
            <div>
              <div
                style={{
                  width: "100px",
                  height: "140px",
                  background: "#fff",
                  borderRadius: 10,
                  boxShadow: "0px 0px 5px #000",
                  float: "left",
                  marginRight: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  src={user}
                  style={{ width: 45, margin: "0.5rem 1.75rem" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "smaller",
                    fontWeight: "bold",
                  }}
                >
                  Rajasekhar
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "smaller",
                    fontWeight: "bold",
                    height: "30px",
                  }}
                ></div>
                <div style={{ margin: "5px 10px" }}>
                  <div style={{ fontSize: "x-small", float: "left" }}>
                    <FaUserFriends size={10} /> 20
                  </div>
                  <div style={{ fontSize: "x-small", float: "right" }}>
                    <MdOutlineFollowTheSigns size={10} /> 10
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {/* <div className="friendsListSection">
        <FriendsList />
      </div> */}
    </div>
  );
}
