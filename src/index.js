import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "./Context";
import { stopReportingRuntimeErrors } from "react-error-overlay";
import { SocketProvider } from "./Components/context/SocketProvider";
import "./assets/fonts/PT_Sans/PTSans-Bold.ttf";
if (process.env.NODE_ENV === "development") {
  stopReportingRuntimeErrors(); // disables error overlays
}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   // document.getElementById("root")
// );
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketProvider>
        <App />
      </SocketProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
