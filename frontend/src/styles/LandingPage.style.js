import styled from "styled-components";

export const Container1 = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 1000px;
  transform: rotate(-10deg);
  top: -250px;
  left: -40px;
  border-radius: 80px;
  background-color: #b9e5d0;
  overflow: hidden;
  z-index: -1;
  //   #a2e5c6  95dbba
`;

export const Blob = styled.div`
  // background-color: #43c187;
  // width: 1000px;
  // height: 900px;
  // border-radius: 50%;
  // border-top-left-radius: 0%;
  box-sizing: border-box;
  padding-top: 200px;
  margin-left: 200px;
  height: 100vh;
`;

export const MainLogo = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 300px;
  margin-top: 110px;
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
    background-color: #93d3b5;
  }
`;

export const SignInText = styled.span`
  font-size: 1.8em;
`;

export const TypeText = styled.span`
  font-size: 1.3em;
`;

export const Container2 = styled.div`
  height: 200px;
  width: 100%;
  //   background-color: #a2e5c6;
  margin: 0 auto;
  margin-top: 85px;
  display: flex;
  border-radius: 10px;
  text-align: center;
`;

export const Grid2 = styled.div`
  margin-top: 30px;
  font-size: 1.4em;
  font-weight: 500;
  border-right: 1px solid gray;
`;

export const Image2 = styled.img`
  width: 200px;
`;

export const CookContainer = styled.div`
  text-align: center;
  margin: 150px 0px;
`;

export const Cook = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;

export const CookDiv = styled.div`
  height: 220px;
  background-color: #def7eb;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 40px 20px;
  text-align: justify;
  justify-content: center;
  text-justify: inter-word;
`;

export const Number = styled.span`
  padding: 5px 12px;
  border-radius: 50%;
  background-color: #43c187;
  float: left;
  font-weight: 600;
  color: white;
  margin-right: 42px;
`;

export const Heading = styled.span`
  font-size: 1.2em;
  font-weight: 600;
`;
