import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JoinRoom.css";

// Material-UI 적용하기
import Button from "@material-ui/core/Button";
// import Image from "@material-ui/core/Image";
import TextField from "@material-ui/core/TextField";

// import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import Header from "../../index_components/Header";
import Footer from "../../index_components/Footer";
import styled from 'styled-components';

const JoinRoom = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <Header/>
      <div className="joinInnerContainer">
        <div className="joinImageContainer">
        </div>
        <div className="joinFormContainer" component={Paper}>
          <div className="joinFormBox">
            <div className="joinTitle">
              <Typography component="h1" variant="h5">
                ScarletChat
              </Typography>
            </div>
            <form className="joinForm" noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="room"
                label="room"
                type="room"
                // size="large"
                id="room"
                autoComplete="current-password"
                onChange={(e) => setRoom(e.target.value)}
              />
              <div className="buttonBox mt-10">
                <Link
                  className="joinButtonLink"
                  onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                  to={`/ChatRoom/chat?name=${name}&room=${room}`}
                  // href={`/chat?name=${name}&room=${room}`}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="joinButton mt-20"
                  >
                    Room Connect
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default JoinRoom;
