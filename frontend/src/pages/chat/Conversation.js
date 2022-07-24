import React from "react";
import {
  ConversationContainer,
  ConversationImg,
  ConversationName,
} from "../../styles/chat/Conversation.style";
import userProfile from "../../assets/user.jpg";

const Conversation = () => {
  return (
    <ConversationContainer>
      <ConversationImg src={userProfile}></ConversationImg>
      <ConversationName>Malak Joumaa</ConversationName>
    </ConversationContainer>
  );
};

export default Conversation;
