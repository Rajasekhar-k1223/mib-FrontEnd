import React, { useState } from "react";
import FriendsList from "./friends/FriendsList";
import Header from "./Header";
import image from "../assets/images/avatar.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RegNewApp from "./RegNewApp";
import AlbumLoad from "./AlbumLoad";
// import { MenuItem } from "@mui/material";
const currencies = [
  {
    value: "null",
    label: "Select App Type",
  },
  {
    value: "blog",
    label: "Blog",
  },
  {
    value: "page",
    label: "Page",
  },
  {
    value: "album",
    label: "Album",
  },
];
const applistold = [
  { appType: "blog", appName: "Rajaskehar" },
  { appType: "page", appName: "Raja" },
  { appType: "blog", appName: "skehar" },
  { appType: "page", appName: "kRajaskehar" },
  { appType: "blog", appName: "Rajaskehar 123" },
];
export default function NewGridView() {
  const [currency, setCurrency] = useState("EUR");
  const [addnewApp, setaddnewApp] = useState(false);
  const [checkdisabled, setcheckdisabled] = useState(true);
  const [newAppName, setnewAppName] = useState("");
  const [AppsList, setAppsList] = useState(applistold);

  const handleChange = (event) => {
    setCurrency(event.target.value);
    console.log(event.target.value);
    event.target.value === "null"
      ? setcheckdisabled(true)
      : setcheckdisabled(false);
  };
  const submitNewApp = () => {
    const submitListNewApp = {
      appType: currency,
      appName: newAppName,
    };
    // console.log(submitNewApp);
    setAppsList([...AppsList, submitListNewApp]);
    //  return <RegNewApp props={submitNewApp} />;
  };
  const CreatenewAppName = (e) => {
    console.log(e.target.value);
    setnewAppName(e.target.value);
  };
  return (
    <div>
      <div>
        <Header />
        <div className="MainSection">
          <div className="FeedsSections">
            {/* <Feeds /> */}
            <div>
              {/* <AlbumLoad /> */}
              <RegNewApp props={AppsList} />

              <div
                className="appnew newapp"
                onClick={() => {
                  setaddnewApp(true);
                }}
              >
                +
              </div>
            </div>
          </div>
          {/* <div className="friendsListSection">
            <FriendsList />
          </div> */}
        </div>
      </div>
      {addnewApp ? (
        <div
          className="ModelViewTotal"
          // onClick={() => {
          //   setaddnewApp(false);
          // }}
        >
          <div
            className="newappCreate"
            style={{ width: 300, height: 300, textAlign: "center" }}
          >
            <Box
              // component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "33ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <div
                  style={{
                    fontsize: "medium",
                    textalign: "center",
                    padding: "1rem",
                  }}
                >
                  Add New App
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    margin: "1rem",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    setaddnewApp(false);
                  }}
                >
                  X
                </div>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  label="App Type"
                  value={currency}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  // helperText="Please select your App Type"
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </div>
              <TextField
                id="outlined-basic"
                label="Enter App Name"
                variant="outlined"
                value={newAppName}
                onChange={CreatenewAppName}
                disabled={checkdisabled}
              />
            </Box>
            <Button
              variant="outlined"
              onClick={() => {
                submitNewApp();
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
