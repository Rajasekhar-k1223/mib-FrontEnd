import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";
import {config} from "./Config";
const SocketContext = createContext(null);
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
export const SocketProvider = (props) => {
  const socket = useMemo(() => io(config.socketIp), []);
  console.log(socket);
  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
