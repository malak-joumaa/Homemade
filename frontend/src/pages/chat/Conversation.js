import React, { useState, useEffect } from "react";
import {
  ConversationContainer,
  ConversationImg,
  ConversationName,
} from "../../styles/chat/Conversation.style";
import userProfile from "../../assets/user.jpg";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.member.find((m) => m !== currentUser);
  }, []);

  return (
    <ConversationContainer>
      <ConversationImg src={userProfile}></ConversationImg>
      <ConversationName>Malak Joumaa</ConversationName>
    </ConversationContainer>
  );
};

export default Conversation;
