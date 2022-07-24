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
    const friendId = conversation.members.find((m) => m !== currentUser);
    console.log(friendId);
    const getUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/user/auth/get-user/?id=" + friendId
        );
        const data = await response.json();
        console.log("friend", data);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <ConversationContainer>
      <ConversationImg src={user ? user.profile_photo : ""}></ConversationImg>
      <ConversationName>
        {user ? user.first_name : "Friend"} {user ? user.last_name : "Friend"}
      </ConversationName>
    </ConversationContainer>
  );
};

export default Conversation;
