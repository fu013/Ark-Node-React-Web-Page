import React from "react";
import "./RoomInfo.css";

import Button from "@material-ui/core/Button";

function RoomInfo({ room }) {
  return (
    <div className="roomInfo">
      <div className="leftInfo">
        <h3 className="leftInfo-text">{`Room : ${room}`}</h3>
      </div>
      <div className="rightInfo">
        <Button
          className="infoButton"
          // variant="contained"
          variant="raised"
          href="/#/ChatRoom"
          color="inherit"
        >
          나가기
        </Button>
      </div>
    </div>
  );
}

export default RoomInfo;
