import React from "react";
import {
  MessageContainer,
  MessageTop,
  MessageBottom,
  MessageText,
  MessageImg,
} from "../../styles/chat/Message.style";
import userProfile from "../../assets/user.jpg";

const Message = ({ me }) => {
  return (
    <MessageContainer person={me}>
      <MessageTop>
        <MessageImg src={userProfile}></MessageImg>
        <MessageText person={me}>Hello this is a message</MessageText>
      </MessageTop>
      <MessageBottom>1 hour ago</MessageBottom>
    </MessageContainer>
  );
};

export default Message;
