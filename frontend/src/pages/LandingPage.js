import React from "react";
import {
  Blob,
  MainLogo,
  Container1,
  Welcome,
  SubTitle,
  SignInBtn,
  SignInText,
  TypeText,
} from "../styles/LandingPage.style";
import logo from "../assets/3.png";

const LandingPage = () => {
  return (
    <Container1>
      <Blob>
        <Welcome>Welcome to Homemade</Welcome>
        <SubTitle>For Home Cooks</SubTitle>
        <SubTitle>For Food Lovers</SubTitle>
        <SignInBtn>
          <SignInText>Sign in</SignInText>
          <br />

          <TypeText>As a customer</TypeText>
        </SignInBtn>
        <SignInBtn>
          <SignInText>Sign in</SignInText>
          <br />
          <TypeText>As a cook</TypeText>
        </SignInBtn>
      </Blob>
      <MainLogo src={logo} />
    </Container1>
  );
};

export default LandingPage;
