import styled from "styled-components";
import green_bg from "../assets/green-bk.png";

export const Info_Container = styled.div`
  min-height: 400px;
  margin: 30px auto;
  background-image: url(${green_bg});
  border-radius: 20px;
  text-align: center;
  box-sizing: border-box;
  padding: 30px;
`;

export const Cook_Name = styled.h2`
  color: #6d716f;
`;

export const Description = styled.div`
  color: #606060;
  font-weight: 500;
  text-align: justify;
  text-justify: inter-word;
`;

export const Opening_Hours = styled.div`
  color: #494949;
  font-weight: 500;
  font-size: 14px;
  float: left;
  margin-top: 10px;
`;

export const Day = styled.button`
  width: 110px;
  height: 35px;
  background-color: transparent;
  color: #494949;
  font-weight: 500;
  border: 1px solid #acdac5;
  border-radius: 20px;
  font-size: 1em;
  &:hover,
  :active {
    background-color: #acdac5;
  }
`;

export const Title = styled.h2`
  color: #3c3c3c;
  text-decoration: underline;
`;
