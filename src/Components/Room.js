import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../service/peer";
import ReactAudioPlayer from "react-audio-player";
import Accept from "../assets/images/Accept_1.gif";
import Rejected from "../assets/images/Rejected_1.gif";
import RingTone from "../assets/audio/beam_me_up.mp3";
import { FaUserPlus } from "react-icons/fa";
import { BsRecordCircleFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import { BsMicMuteFill } from "react-icons/bs";
import { BiPhoneOff } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSocket } from "../Components/context/SocketProvider";
import { PeerProvider } from "./Peer";

const RoomPage = () => {
  const socket = useSocket();
  // console.log(socket);
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [VideoStream, setVideoStream] = useState(false);

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(email);
    console.log(id);
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await window.navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);
  // useEffect(() => {
  //   handleCallUser();
  // });
  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await window.navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    console.log(
      // peer.peer.addEventListener("negotiationneeded", handleNegoNeeded)
      peer.peer
    );
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      console.log(remoteStream);
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);
  const checkVideoStream = async () => {
    const enabled = myStream.getTracks()[1].enabled;
    console.log(enabled);
    if (enabled) {
      myStream.getTracks()[1].enabled = false;
      myStream.getTracks().forEach(function (track) {
        const cloneTrack = track.clone();
        peer.peer.addTrack(cloneTrack, myStream);
        cloneTrack.enabled = false;
        console.log(cloneTrack);
      });

      // html = `<i class="fas fa-video-slash"></i>`;
      // stopVideo.classList.toggle("background__red");
      // stopVideo.innerHTML = html;
    } else {
      myStream.getTracks()[1].enabled = true;
      myStream.getTracks().forEach(function (track) {
        const cloneTrack = track.clone();
        peer.peer.addTrack(cloneTrack, myStream);
        cloneTrack.enabled = true;
        console.log(cloneTrack);
      });
      console.log(myStream.getTracks());
      // html = `<i class="fas fa-video"></i>`;
      // stopVideo.classList.toggle("background__red");
      // stopVideo.innerHTML = html;
    }
    //console.log(myStream.getVideoTracks());
  };
  const checkVideoStreamoff = async () => {
    // const stream = await navigator.mediaDevices.getUserMedia({
    //   audio: true,
    //   video: false,
    // });
    // console.log(stream);
    // console.log();
    //console.log(myStream.getTracks().find((track) => track.kind === "video"));
    const videoTrack = myStream
      .getTracks()
      .find((track) => track.kind === "video");
    // myStream.getTracks().forEach(function (track) {
    //   const cloneTrack = track.clone();
    //   peer.peer.addTrack(cloneTrack, myStream);
    //   cloneTrack.enabled = false;
    // });
    videoTrack.enabled = false;
    //setMyStream(stream);
    setVideoStream(true);
    console.log(videoTrack);
  };
  const checkVideoStreamon = async () => {
    // const stream = await navigator.mediaDevices.getUserMedia({
    //   audio: true,
    //   video: true,
    // });
    // setMyStream(stream);
    // console.log(myStream.getTracks().find((track) => track.kind === "video"));
    // setVideoStream(true);
    const videoTrack = myStream
      .getTracks()
      .find((track) => track.kind === "video");
    videoTrack.enabled = true;
    // console.log(videoTrack);
    // myStream.getTracks().forEach(function (track) {
    //   const cloneTrack = track.clone();
    //   peer.peer.addTrack(cloneTrack, myStream);
    //   cloneTrack.enabled = true;
    // });
    console.log(videoTrack);
    setVideoStream(false);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        background: "rgb(20, 20, 30)",
      }}
    >
      {/* <h1>Room Page</h1>
      <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>
      {myStream && <button onClick={sendStreams}>Send Stream</button>}*/}
      {/* <ReactAudioPlayer
        src={RingTone}
        autoPlay
        controls
        // onPause={Pause}
        // onPlay={true}
      /> */}
      {remoteSocketId && (
        <button
          onClick={handleCallUser}
          style={{ position: "absolute", zIndex: "9999999" }}
        >
          CALL
        </button>
      )}
      {myStream && (
        <>
          <ReactPlayer
            playing
            muted
            width="80%"
            height="100%"
            style={{
              position: "absolute",
              background: "#14141e",
              zIndex: "99999",
            }}
            url={myStream}
          />
          {/* <video srcObject={myStream} autoPlay playsInline /> */}
        </>
      )}
      {remoteStream && (
        <>
          <ReactPlayer
            playing
            muted
            width="15%"
            height="auto"
            style={{
              position: "absolute",
              zIndex: "99999",
              right: "0px",
              bottom: "4px",
            }}
            url={remoteStream}
          />
          {/* <video srcObject={remoteStream} autoPlay playsInline /> */}
        </>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          left: "0px",
          right: "0px",
          /* width: 100%; */
          /* height: 100px; */
          zIndex: "99999",
          textAlign: "center",
        }}
      >
        <BsMicFill color="#fff" size="16" />
        <img src={Rejected} style={{ width: "3rem", borderRadius: "2rem" }} />
        {VideoStream ? (
          <BsFillCameraVideoFill
            size="16"
            color="#fff"
            onClick={() => checkVideoStream()}
          />
        ) : (
          <BsFillCameraVideoOffFill
            size="16"
            color="#fff"
            onClick={() => checkVideoStream()}
          />
        )}
      </div>
    </div>
  );
};

export default RoomPage;
