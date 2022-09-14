import React, { useState } from "react";
import Header from "./Header";
import banner from "../assets/images/banner.jpg";
import user from "../assets/images/avatar.png";
import { RiExternalLinkFill } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import FriendsList from "./FriendsList";
export default function Profile() {
  const [info, setinfo] = useState(true);
  const [Friends, setFriends] = useState(false);
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
  return (
    <div>
      <Header />
      <div className="MainSection">
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
              <div>
                <div className="infoHeader">Personal Info</div>
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
                <div className="infoHeader">School Info</div>
              </div>
              <div>
                <div className="infoHeader">Study Info</div>
              </div>
              <div>
                <div className="infoHeader">Work Experience Info</div>
              </div>
              <div>
                <div className="infoHeader">Addtional Info</div>
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
