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
} from "../../styles/chat/Chat.style";

const Chat = () => {
  return (
    <div>
      <Navbar />
      <ChatContainer>
        <Grid container spacing={1}>
          <Grid item xs={3.5}>
            <ChatMenu>
              <ChatMenuWrapper>menu</ChatMenuWrapper>
            </ChatMenu>
          </Grid>

          <Grid item xs={5.5}>
            <ChatBox>
              <ChatBoxWrapper>box</ChatBoxWrapper>
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
