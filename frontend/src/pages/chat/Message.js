import React from "react";
import {
  MessageContainer,
  MessageTop,
  MessageBottom,
  MessageText,
  MessageImg,
} from "../../styles/chat/Message.style";
import { format } from "timeago.js";
import userProfile from "../../assets/user.jpg";
import { useSelector } from "react-redux";

const Message = ({ message, me }) => {
  const user = useSelector((state) => state.login);
  return (
    <MessageContainer person={me}>
      <MessageTop>
        <MessageImg src={me ? user.profile_photo : userProfile}></MessageImg>
        <MessageText person={me}>{message.text}</MessageText>
      </MessageTop>
      <MessageBottom>{format(message.createdAt)}</MessageBottom>
    </MessageContainer>
  );
};

export default Message;
