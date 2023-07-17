import React, { useCallback, useEffect, useState,useRef } from "react";
import { useSocket } from "../Socket";
import { usePeer } from "./Peer";
import { off } from "process";
import ReactPlayer from "react-player";

const RoomPage = ()=>{
    const {socket} = useSocket();
    const [myStream,setmyStream] = useState(null);
    const [remoteEmailId,setRemoteEmailId] = useState(null);
    const {peer,createOffer,creatAnswer,setRemoteAns,sendStream,remoteStream} = usePeer();
    const handleNewUserJoinede = useCallback( async(data) =>{
        const {emailId} = data;
        const offer = await createOffer();
        socket.emit("call-user",{emailId,offer})
        setRemoteEmailId(emailId)
    },[createOffer,socket]);

    const handleIcmoeingCall = useCallback(async(data)=>{
    const {from,offer} = data;
    console.log("Incoming call from",from,offer);
    const ans = await creatAnswer(offer);
    socket.emit("call-accepted",{emailId:from,ans});
    setRemoteEmailId(from)
    },[creatAnswer,socket]);

    const hadlecallAccepted = useCallback(async(data)=>{
        const {ans} = data;
        await setRemoteAns(ans);
    },[setRemoteAns]);

    const handleNegosiation = useCallback(()=>{
        console.log(socket)
        const localoffer = peer.localDescription;
        socket.emit("call-user",{emailId:remoteEmailId,offer:localoffer})
    },[peer.localDescription,remoteEmailId,socket]);
    const getUserMediaStream = useCallback(async ()=>{
        const stream = await navigator.mediaDevices.getUserMedia({audio:true,video:true});
        sendStream(stream);
        setmyStream(stream);

    },[sendStream])
    useEffect(()=>{
        peer.addEventListener("negotiationneeded",handleNegosiation);
        return (()=>{
            peer.removeEventListener("negotiationneeded",handleNegosiation);
        })
    },[handleNegosiation])
    useEffect(()=>{
        socket.on("user-joined",handleNewUserJoinede);
        socket.on("incomeing-call",handleIcmoeingCall);
        socket.on("call-accepted",hadlecallAccepted);


        return ()=>{
            socket.off("user-joined",handleNewUserJoinede);
            socket.off("incomeing-call",handleIcmoeingCall);
            socket.off("call-accepted",hadlecallAccepted);
        }
    },[socket])
    useEffect(()=>{
        getUserMediaStream();
    },[getUserMediaStream])
    return (<div>
        <h2>Video</h2>
        <ReactPlayer url={myStream} playing muted/>
        <ReactPlayer url={remoteStream}/>
    </div>)
}
export default RoomPage;