import styled from "styled-components";

export const List = styled.li`
  margin-left: 50px;
  font-weight: 600;
  margin-top: 15px;
  &:nth-of-type(4) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
  &:nth-of-type(5) {
    font-size: 1.4em;
  }
  &:active {
    color: #43c187;
    text-decoration: underline;
  }
`;
