import React from "react";
import "./Message.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  const startMessageUserNameStyle = {
    background: "orange",
    color: "white",
    fontSize: "20px",
    textTransform: "uppercase"
  };
  const startMessageUserTextStyle = {
    textTransform: "uppercase",
    borderBottom: "1px solid black",
    boxSizing: "border-box",
    padding: "5px",
  };

  const userNameStyle = {
    background: "cornflowerblue",
    color: "white",
    fontSize: "15px",
  };
  const userTextStyle = {
    fontWegiht: "500"
  };
  return isSentByCurrentUser ? (
    <div className="messageContainer end">
      <div className="messageBox backgroundLight">
        <p className="messageText black">{text}</p>
      </div>
      <p className="sentMessage pl-10" style={userNameStyle}>{trimmedName}</p>
    </div>
  ) : (
    <div className="messageContainer start">
      <p className="sentMessage pr-10" style={startMessageUserNameStyle}>{user}</p>
      <div className="messageBox backgroundLight" style={userTextStyle}>
        <p className="messageText black" style={startMessageUserTextStyle}>{text}</p>
      </div>
    </div>
  );
};

export default Message;
