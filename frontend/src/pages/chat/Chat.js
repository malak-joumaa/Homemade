import React from "react";
import Navbar from "../../components/Navbar";
import { Grid, Container } from "@mui/material";
import {
  ChatContainer,
  ChatMenu,
  ChatOnline,
  ChatBox,
  ChatMenuWrapper,
  ChatBoxWrapper,
  ChatOnlineWrapper,
  SearchBox,
  ChatBoxTop,
  ChatBoxBottom,
} from "../../styles/chat/Chat.style";
import Conversation from "./Conversation";
import Message from "./Message";

const Chat = () => {
  return (
    <div>
      <Navbar />
      <ChatContainer>
        <Grid container spacing={1}>
          <Grid item xs={3.5}>
            <ChatMenu>
              <ChatMenuWrapper>
                <SearchBox placeholder="search" />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
              </ChatMenuWrapper>
            </ChatMenu>
          </Grid>

          <Grid item xs={5.5}>
            <ChatBox>
              <ChatBoxWrapper>
                <ChatBoxTop></ChatBoxTop>

                <Message />
                <Message me={true} />
                <Message />
                <Message />

                <ChatBoxBottom></ChatBoxBottom>
              </ChatBoxWrapper>
            </ChatBox>
          </Grid>

          <Grid item xs={3}>
            <ChatOnline>
              <ChatOnlineWrapper>wrapper</ChatOnlineWrapper>
            </ChatOnline>
          </Grid>
        </Grid>
      </ChatContainer>
    </div>
  );
};

export default Chat;
