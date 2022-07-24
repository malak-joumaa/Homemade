import React from "react";
import {
  MessageContainer,
  MessageTop,
  MessageBottom,
  MessageText,
  MessageImg,
} from "../../styles/chat/Message.style";
import userProfile from "../../assets/user.jpg";

const Message = ({ message, me }) => {
  return (
    <MessageContainer person={me}>
      <MessageTop>
        <MessageImg src={userProfile}></MessageImg>
        <MessageText person={me}>{message.text}</MessageText>
      </MessageTop>
      <MessageBottom>{message.createdAt}</MessageBottom>
    </MessageContainer>
  );
};

export default Message;
