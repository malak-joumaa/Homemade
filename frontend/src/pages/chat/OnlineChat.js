import React from "react";
import {
  OnlineChatContainer,
  OnlineFriend,
  OnlineChatImgContainer,
  OnlineChatImg,
  OnlineChatBadge,
  OnlineChatName,
} from "../../styles/chat/OnlineChat.style";

const OnlineChat = () => {
  return (
    <OnlineChatContainer>
      <OnlineFriend>
        <OnlineChatImgContainer>
          <OnlineChatImg src="https://i.pravatar.cc/205" />
          <OnlineChatBadge></OnlineChatBadge>
        </OnlineChatImgContainer>
        <OnlineChatName>Friend</OnlineChatName>
      </OnlineFriend>
    </OnlineChatContainer>
  );
};

export default OnlineChat;
