import styled from "styled-components";

export const Container1 = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 1000px;
  transform: rotate(-10deg);
  top: -300px;
  left: -40px;
  border-radius: 80px;
  background-color: #95dbba;
  //   #a2e5c6
`;

export const Blob = styled.div`
  // background-color: #43c187;
  // width: 1000px;
  // height: 900px;
  // border-radius: 50%;
  // border-top-left-radius: 0%;
  margin-top: 400px;
  margin-left: 200px;
  transform: rotate(10deg);
`;

export const MainLogo = styled.img`
  width: 500px;
  height: 500px;
  margin-top: 450px;
  transform: rotate(10deg);
  border-radius: 40%;
  position: absolute;
  top: 20px;
  right: 300px;
`;

export const Welcome = styled.h2`
  color: #565555;
  font-size: 25px;
`;

export const SubTitle = styled.h1`
  font-size: 60px;
  color: #444444;
`;

export const SignInBtn = styled.button`
  width: 170px;
  height: 58px;
  background-color: white;
  color: #4ea97f;
  border: none;
  border-radius: 50px;
  margin-right: 90px;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover {
    color: white;
    background-color: #43c187;
  }
`;

export const SignInText = styled.span`
  font-size: 1.8em;
`;

export const TypeText = styled.span`
  font-size: 1.3em;
`;
