import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  ConversationContainer,
  ConversationImg,
  ConversationName,
} from "../../styles/chat/Conversation.style";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser);
    const getUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/user/get-user/?id=" + friendId
        );
        const data = await response.json();
        setUser(data);
      } catch (err) {
        toast.error("Error fetching user");
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <ConversationContainer>
      <ConversationImg src={user?.profile_photo}></ConversationImg>
      <ConversationName>
        {user?.first_name} {user?.last_name}
      </ConversationName>
    </ConversationContainer>
  );
};

export default Conversation;
