import React, { useState } from "react";
import Header from "./Header";
import banner from "../assets/images/banner.jpg";
import user from "../assets/images/avatar.png";
import { RiExternalLinkFill } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { BsLockFill } from "react-icons/bs";
import { BsUnlockFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import FriendsList from "./FriendsList";
export default function Profile() {
  const [info, setinfo] = useState(true);
  const [Friends, setFriends] = useState(false);
  const [schoolLock, setschoolLock] = useState(true);
  const [studyLock, setstudyLock] = useState(true);
  const [workLock, setworkLock] = useState(true);
  const [addinfoLock, setaddinfoLock] = useState(true);
  const [infoshow, setinfoshow] = useState(true);
  const [addprofileMenu, setaddprofileMenu] = useState(false);
  const viewUserDetails = (id) => {
    alert(id);
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
        <div
          style={{
            width: "14rem",
            height: "92vh",
            position: "fixed",
            top: 60,
            background: "darkslategrey",
            left: 0,
            borderRight: "1px solid yellow",
          }}
        >
          <div style={{ width: "100%", height: 110, background: "#fff" }}>
            <img
              src={banner}
              style={{
                objectFit: "cover",
                width: "224px",
                height: "110px",
              }}
            />
            <img
              src={user}
              style={{
                objectFit: "cover",
                width: "35px",
                height: "35px",
                background: "#fff",
                borderRadius: "2rem",
                position: "relative",
                left: "6rem",
                bottom: "4rem",
              }}
            />
            <BiEdit
              size={15}
              style={{
                objectFit: "cover",
                background: "rgb(255, 255, 255)",
                borderRadius: "2rem",
                position: "relative",
                float: "right",
                bottom: "1.5rem",
                marginRight: "1rem",
                boxShadow: "0px 0px 5px #000",
                cursor: "pointer",
              }}
            />
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
        <div
          style={{
            width: "65%",
            height: "92vh",
            position: "fixed",
            top: 60,
            background: "#efefef6e",
            left: "14rem",
            padding: "1rem",
            borderRight: "1px solid yellow",
            overflowY: "auto",
            overflowx: "hidden",
          }}
          className="userInfoData"
        >
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
              <div>
                <div className="infoHeader">
                  School Info{" "}
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
              <div>
                <div className="infoHeader">
                  Study Info{" "}
                  <TiDeleteOutline
                    style={{ float: "right", marginLeft: 3, cursor: "pointer" }}
                  />
                  {studyLock ? (
                    <BsLockFill
                      size="16"
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={() => {
                        setstudyLock(false);
                      }}
                    />
                  ) : (
                    <BsUnlockFill
                      size="16"
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={() => {
                        setstudyLock(true);
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
              <div>
                <div className="infoHeader">
                  {infoshow ? <FaAngleDown /> : <FaAngleUp />} Work Experience
                  Info{" "}
                  <TiDeleteOutline
                    style={{ float: "right", marginLeft: 3, cursor: "pointer" }}
                  />
                  {workLock ? (
                    <BsLockFill
                      size="16"
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={() => {
                        setworkLock(false);
                      }}
                    />
                  ) : (
                    <BsUnlockFill
                      size="16"
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={() => {
                        setworkLock(true);
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
              <div>
                <div
                  className="infoHeader"
                  style={{ height: "2.4rem", lineHeight: "1.5rem" }}
                >
                  <div
                    onClick={() => {
                      infoshow ? setinfoshow(false) : setinfoshow(true);
                    }}
                    style={{ width: "94%", float: "left", height: "auto" }}
                  >
                    {infoshow ? <FaAngleDown /> : <FaAngleUp />} Addtional Info{" "}
                  </div>
                  <TiDeleteOutline
                    style={{ float: "right", marginLeft: 3, cursor: "pointer" }}
                  />
                  {addinfoLock ? (
                    <BsLockFill
                      size="16"
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={() => {
                        setaddinfoLock(false);
                      }}
                    />
                  ) : (
                    <BsUnlockFill
                      size="16"
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={() => {
                        setaddinfoLock(true);
                      }}
                    />
                  )}
                </div>
                {infoshow ? (
                  <div className="personalInfo">
                    <p>
                      <div style={{ width: 150, float: "left" }}>
                        User Name :{" "}
                      </div>
                      <div style={{ width: 150, float: "left" }}>
                        Rajasekhar
                      </div>
                      <div style={{ clear: "both" }}></div>
                    </p>
                    <p>
                      <div style={{ width: 150, float: "left" }}>
                        First Name :{" "}
                      </div>
                      <div style={{ width: 150, float: "left" }}>
                        Rajasekhar
                      </div>
                      <div style={{ clear: "both" }}></div>
                    </p>
                    <p>
                      <div style={{ width: 150, float: "left" }}>
                        Last Name :{" "}
                      </div>
                      <div style={{ width: 150, float: "left" }}>
                        Rajasekhar
                      </div>
                      <div style={{ clear: "both" }}></div>
                    </p>
                    <p>
                      <div style={{ width: 150, float: "left" }}>
                        Date of Birth :
                      </div>
                      <div style={{ width: 150, float: "left" }}>
                        Rajasekhar
                      </div>
                      <div style={{ clear: "both" }}></div>
                    </p>
                    <p>
                      <div style={{ width: 150, float: "left" }}>Email : </div>
                      <div style={{ width: 150, float: "left" }}>
                        Rajasekhar
                      </div>
                      <div style={{ clear: "both" }}></div>
                    </p>
                    <p>
                      <div style={{ width: 150, float: "left" }}>
                        Address :{" "}
                      </div>
                      <div style={{ width: 150, float: "left" }}>
                        Rajasekhar
                      </div>
                      <div style={{ clear: "both" }}></div>
                    </p>
                    <p>
                      <button>+Add</button>
                    </p>
                  </div>
                ) : null}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
              </div>{" "}
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
      <div className="friendsListSection">
        <FriendsList />
      </div>
    </div>
  );
}
