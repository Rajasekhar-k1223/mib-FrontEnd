import React, { useCallback, useEffect, useState, useRef } from "react";
import { useSocket } from "../Socket";
// import { usePeer } from "./Peer";
import peer from "../service/peer";
import { off } from "process";
import ReactPlayer from "react-player";

const RoomPage = () => {
  const { socket } = useSocket();
  const [myStream, setMyStream] = useState(null);
  const [remoteUserId, setRemoteUserId] = useState(null);
  const [remoteEmailId, setRemoteEmailId] = useState(null);
  const [remoteStream, setRemoteStream] = useState();
  // const {
  //   peer,
  //   createOffer,
  //   createAnswer,
  //   setRemoteAns,
  //   sendStream,
  //   remoteStream,
  // } = usePeer();
  // const handleNewUserJoined = useCallback(
  //   async (data) => {
  //     console.log(data);
  //     const { emailId } = data;
  //     const offer = await createOffer();
  //     socket.emit("call-user", { emailId, offer });
  //     setRemoteEmailId(emailId);
  //   },
  //   [createOffer, socket]
  // );

  // const handleIncomingCall = useCallback(
  //   async (data) => {
  //     const { from, offer } = data;
  //     console.log("Incoming call from", from, offer);
  //     const ans = await createAnswer(offer);
  //     socket.emit("call-accepted", { emailId: from, ans });
  //     setRemoteEmailId(from);
  //   },
  //   [createAnswer, socket]
  // );

  // const handleCallAccepted = useCallback(
  //   async (data) => {
  //     const { ans } = data;
  //     await setRemoteAns(ans);
  //   },
  //   [setRemoteAns]
  // );

  // const handleNegotiation = useCallback(async () => {
  //   console.log(socket);
  //   const localoffer = await peer.createOffer();
  //   console.log(localoffer);
  //   socket.emit("call-user", { emailId: remoteEmailId, offer: localoffer });
  // }, [peer, remoteEmailId, socket]);
  // const getUserMediaStream = useCallback(async () => {
  //   const stream = await navigator.mediaDevices.getUserMedia({
  //     audio: true,
  //     video: true,
  //   });
  //   sendStream(stream);
  //   setMyStream(stream);
  // }, [sendStream]);
  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteUserId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteUserId, offer });
    setMyStream(stream);
  }, [remoteUserId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteUserId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
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
    socket.emit("peer:nego:needed", { offer, to: remoteUserId });
  }, [remoteUserId, socket]);

  useEffect(() => {
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
    // socket.on("user-joined", handleNewUserJoined);
    // socket.on("incoming-call", handleIncomingCall);
    // socket.on("call-accepted", handleCallAccepted);

    // return () => {
    //   socket.off("user-joined", handleNewUserJoined);
    //   socket.off("incoming-call", handleIncomingCall);
    //   socket.off("call-accepted", handleCallAccepted);
    // };
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
  // useEffect(() => {
  //   getUserMediaStream();
  // }, [getUserMediaStream]);
  useEffect(() => {
    peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);
  return (
    <div>
      <h2>Video</h2>
      <ReactPlayer url={myStream} playing muted width="30px" />
      <ReactPlayer url={remoteStream} />
    </div>
  );
};
export default RoomPage;
