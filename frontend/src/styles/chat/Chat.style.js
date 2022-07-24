import styled from "styled-components";

export const ChatContainer = styled.div`
  height: calc(100vh - 70px);
  display: flex;
`;

export const ChatMenu = styled.div``;

export const ChatOnline = styled.div``;

export const ChatBox = styled.div``;

export const SearchBox = styled.input`
  height: 32px;
  width: fill;
  margin-right: 100px;
  background-color: #f9f9f9;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  padding-left: 20px;
  font-size: 1.1em;
  margin-bottom: 10px;
`;

export const ChatMenuWrapper = styled.div`
  padding: 10px;
  height: calc(100vh - 100px);
`;

export const ChatOnlineWrapper = styled.div``;

export const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const ChatBoxTop = styled.div`
  height: calc(100vh - 180px);
  overflow-y: scroll;
  padding-right: 10px;
`;

export const ChatBoxBottom = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChatInput = styled.textarea`
  width: 80%;
  height: 50px;
  padding: 10px;
  resize: none;
  border: 1px solid #d3d3d3;
  border-radius: 15px;
  margin-top: 10px;
  font-family: "Quicksand", sans-serif;
  font-size: 1em;
  &:focus {
    outline: none;
    border: 1px solid gray;
  }
`;

export const SendBtn = styled.button`
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  margin-left: 10px;
  font-size: 18px;
  background-color: #acdac5;
  border: none;
  border-radius: 15px;
  padding: 5px 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px;
  &:active {
    transform: translateY(2px);
  }
`;

export const NoConversationText = styled.span`
  position: absolute;
  top: 100px;
  font-size: 50px;
  color: lightgray;
  cursor: default;
`;
