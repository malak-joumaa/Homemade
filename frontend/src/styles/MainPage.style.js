import styled from "styled-components";
import Green from "../assets/green-bk3.png";

export const SearchBox = styled.input`
  height: 35px;
  width: fill;
  margin-right: 100px;
  background-color: #f9f9f9;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  padding-left: 20px;
  font-size: 1.1em;
`;

export const LocationName = styled.input`
  height: 40px;
  width: 250px;
  float: right;
  border: 1px solid #43c187;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Title = styled.h2`
  font-size: 1.4em;
`;

export const TopContainer = styled.div`
  width: 200px;
  height: 180px;
  padding: 20px;
  background-image: url("${Green}");
  box-shadow: inset 0 0 0 1000px rgba(113, 209, 165, 0.2);
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
export const PhotoName = styled.div`
  display: flex;
`;
export const TopPhoto = styled.img`
  border: 1px solid black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;
export const TopName = styled.h3`
  padding-top: -1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TopProfileLink = styled.a`
  text-decoration: underline;
  font-weight: bold;
  position: absolute;
  bottom: 30px;
`;

export const IconsBox = styled.div`
  display: flex;

  text-align: center;
  margin-top: 25px;
`;
export const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(204, 255, 232, 0.8);
  margin-right: 10%;
  display: flex;
  justify-content: center;
`;
export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: auto;
`;
