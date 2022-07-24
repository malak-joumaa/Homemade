import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: ${(props) => (props.person ? "flex-end" : "")};
`;

export const MessageTop = styled.div`
  display: flex;
`;

export const MessageBottom = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

export const MessageText = styled.p`
  padding: 10px;
  border-radius: 20px;
  max-width: 300px;
  background-color: ${(props) => (props.person ? "#d3d3d3" : "#acdac5")};
`;

export const MessageImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
