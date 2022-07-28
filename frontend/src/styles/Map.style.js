import styled from "styled-components";

export const MapSearch = styled.div`
  min-height: 35px;
  width: 400px;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1px;
  left: 0;
  right: 0;
  margin: auto;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 30px;
  font-size: 1em;
  border: 1px solid #c1bfbf;
`;

export const Location = styled.p`
  font-size: 1.45em;
  font-weight: 500;
  text-align: center;
  margin: 10px auto;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  font-size: 17px;
  border-radius: 5px;
  background-color: #43c187;
  color: white;
  border: none;
  margin-top: 10px;
  text-align: center;
`;
