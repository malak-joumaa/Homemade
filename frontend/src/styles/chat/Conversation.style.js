import styled from "styled-components";

export const ConversationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e9e8e8;
  }
`;

export const ConversationImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

export const ConversationName = styled.span`
  font-weight: 500;
`;
