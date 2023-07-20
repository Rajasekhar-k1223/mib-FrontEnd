import React, { useCallback, useEffect, useState,useRef } from "react";
import { useSocket } from "../Socket";
// import { usePeer } from "./Peer";
import { off } from "process";
import ReactPlayer from "react-player";
import peer from "../service/peer"

const RoomPage = ()=>{
    const {socket} = useSocket();
    const [remoteUserId,setRemoteUserId] = useState(null);
    const [myStream,setMyStream] = useState(null);
    const [remoteStream,setRemoteStream] = useState()
    // const [remoteEmailId,setRemoteEmailId] = useState(null);
    //const {peer,createOffer,creatAnswer,setRemoteAns,sendStream,remoteStream} = usePeer();
    const handleNewUserJoined = useCallback( async(data) =>{
        const {emailId} = data;
        console.log("call-ser-data")
        console.log(data);
        const offer = await createOffer();
        socket.emit("call-user",{emailId,offer})
        setRemoteUserId(emailId)
    },[]);

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
  
    const handleNegosiation = useCallback(async()=>{
        const localoffer = await peer.getOffer();
        socket.emit("call-user",{to:remoteUserId ,offer:localoffer})
    },[remoteUserId,socket]);

    const getUserMediaStream = useCallback(async ()=>{
        const stream = await navigator.mediaDevices.getUserMedia({audio:true,video:true});
        sendStreams(stream);
        setMyStream(stream);

    },[sendStreams])
    useEffect(()=>{
        peer.addEventListener("negotiationneeded",handleNegosiation);
        return (()=>{
            peer.removeEventListener("negotiationneeded",handleNegosiation);
        })
    },[handleNegosiation])

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
          setRemoteStream(remoteStream[0]);
        });
      }, []);
    useEffect(()=>{
        socket.on("user-joined",handleNewUserJoined);
        socket.on("incoming-call",handleIncommingCall);
        socket.on("call-accepted",handleCallAccepted);
        socket.on("peer:nego:needed", handleNegoNeedIncomming);
        socket.on("peer:nego:final", handleNegoNeedFinal);
        return ()=>{
            socket.off("user-joined",handleNewUserJoined);
            socket.off("incomeing-call",handleIncommingCall);
            socket.off("call-accepted",handleCallAccepted);
            socket.off("peer:nego:needed", handleNegoNeedIncomming);
            socket.off("peer:nego:final", handleNegoNeedFinal);
        }
    },[socket,handleNewUserJoined,handleIncommingCall,handleCallAccepted,handleNegosiation])
    useEffect(()=>{
        getUserMediaStream();
        handleCallUser();
    },[getUserMediaStream])
    return (<div>
        <h2>Video</h2>
        {/* <ReactPlayer url={myStream} playing muted/>
        <ReactPlayer url={remoteStream} playing/> */}
         {myStream && (
        <>
          <h1>My Stream</h1>
          <ReactPlayer
            playing
            muted
            height="100px"
            width="200px"
            url={myStream}
          />
        </>
      )}
      {remoteStream && (
        <>
          <h1>Remote Stream</h1>
          <ReactPlayer
            playing
            muted
            height="100px"
            width="200px"
            url={remoteStream}
          />
        </>
      )}
    </div>)
}
export default RoomPage;