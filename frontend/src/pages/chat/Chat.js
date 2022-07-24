import React, { useState, useEffect } from "react";
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
  ChatInput,
  SendBtn,
  NoConversationText,
} from "../../styles/chat/Chat.style";
import Conversation from "./Conversation";
import Message from "./Message";
import OnlineChat from "./OnlineChat";
import { useSelector } from "react-redux";

const Chat = () => {
  const user = useSelector((state) => state.login);
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const user_id = user.user_id;

  console.log(user_id);
  useEffect(() => {
    getConversations();
  }, []);

  const getConversations = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/chat/get-convo/?id=" + user_id
      );
      const data = await response.json();
      console.log(data);
      setConversation(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("convo", conversation);

  return (
    <div>
      <Navbar />
      <ChatContainer>
        <Grid container spacing={1}>
          <Grid item xs={3.5}>
            <ChatMenu>
              <ChatMenuWrapper>
                <SearchBox placeholder="search" />
                {conversation.map((convo) => (
                  <Conversation conversation={convo} currentUser={user_id} />
                ))}
              </ChatMenuWrapper>
            </ChatMenu>
          </Grid>

          <Grid item xs={5.5}>
            <ChatBox>
              <ChatBoxWrapper>
                {currentChat ? (
                  <>
                    <ChatBoxTop>
                      <Message />
                      <Message me={true} />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                      <Message />
                    </ChatBoxTop>
                    <ChatBoxBottom>
                      <ChatInput placeholder="Type a message..." />
                      <SendBtn>Send</SendBtn>
                    </ChatBoxBottom>
                  </>
                ) : (
                  <NoConversationText>
                    Open a conversation to start a chat.
                  </NoConversationText>
                )}
              </ChatBoxWrapper>
            </ChatBox>
          </Grid>

          <Grid item xs={3}>
            <ChatOnline>
              <ChatOnlineWrapper>
                <OnlineChat />
              </ChatOnlineWrapper>
            </ChatOnline>
          </Grid>
        </Grid>
      </ChatContainer>
    </div>
  );
};

export default Chat;
