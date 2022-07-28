import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import { Grid, Container } from "@mui/material";
import {
  ChatContainer,
  ChatMenu,
  ChatBox,
  ChatMenuWrapper,
  ChatBoxWrapper,
  SearchBox,
  ChatBoxTop,
  ChatBoxBottom,
  ChatInput,
  SendBtn,
  NoConversationText,
} from "../../styles/chat/Chat.style";
import Conversation from "./Conversation";
import Message from "./Message";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const Chat = () => {
  // const [socket, setSocket] = useState(null);
  const user = useSelector((state) => state.login);
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const user_id = user.user_id;
  const scrollRef = useRef();
  const socket = useRef();

  console.log(user_id);
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  // const socket = useSelector((state) => state.socket);
  {
    socket && console.log("socket", socket);
  }

  useEffect(() => {
    socket?.current.emit("addUser", user?.user_id);
    socket?.current.on("getUsers", (users) => {
      console.log("users", users);
    });
  }, [user]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

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
  console.log("currentChat", currentChat);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/chat/get-message/?id=" + currentChat?._id
        );
        const msg = await response.json();
        console.log(msg);
        setMessages(msg);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  console.log("messages", messages);

  // Submit message
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user_id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    console.log("hi", currentChat);

    const receiverId = currentChat.members.find((m) => m !== user_id);

    socket?.current.emit("sendMessage", {
      senderId: user_id,
      receiverId,
      text: newMessage,
    });

    try {
      const response = await fetch(
        "http://localhost:5000/api/chat/add-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(message),
        }
      );
      const data = await response.json();
      console.log(data);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  // Scroll to bottom
  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <ChatContainer>
          <Grid container spacing={1}>
            <Grid item xs={3.5}>
              <ChatMenu>
                <ChatMenuWrapper>
                  <SearchBox placeholder="search" />
                  {conversation.map((convo) => (
                    <div
                      onClick={() => {
                        setCurrentChat(convo);
                      }}
                    >
                      <Conversation
                        conversation={convo}
                        currentUser={user_id}
                      />
                    </div>
                  ))}
                </ChatMenuWrapper>
              </ChatMenu>
            </Grid>

            <Grid item xs={6.5}>
              <ChatBox>
                <ChatBoxWrapper>
                  {currentChat ? (
                    <>
                      <ChatBoxTop>
                        {messages.map((msg) => (
                          <div ref={scrollRef}>
                            <Message
                              message={msg}
                              me={msg.sender === user_id}
                            />
                          </div>
                        ))}
                      </ChatBoxTop>
                      <ChatBoxBottom>
                        <ChatInput
                          placeholder="Type a message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <SendBtn onClick={handleSubmit}>Send</SendBtn>
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
          </Grid>
        </ChatContainer>
      </Container>
    </div>
  );
};

export default Chat;
