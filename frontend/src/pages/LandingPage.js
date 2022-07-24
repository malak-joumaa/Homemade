import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Blob,
  MainLogo,
  Container1,
  Container2,
  Welcome,
  SubTitle,
  SignInBtn,
  SignInText,
  TypeText,
  Grid2,
  Image2,
  Cook,
  CookDiv,
  CookContainer,
  Number,
  Heading,
} from "../styles/LandingPage.style";
import logo from "../assets/3.png";
import CookImg from "../assets/user-sign-in.jpg";
import { Grid, Container } from "@mui/material";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container1></Container1>
      <Blob>
        <Welcome>Welcome to Homemade</Welcome>
        <SubTitle>For Home Cooks</SubTitle>
        <SubTitle>For Food Lovers</SubTitle>
        <SignInBtn
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          <SignInText>Sign in</SignInText>
          <br />

          <TypeText>As a customer</TypeText>
        </SignInBtn>
        <SignInBtn
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          <SignInText>Sign in</SignInText>
          <br />
          <TypeText>As a cook</TypeText>
        </SignInBtn>
      </Blob>
      <MainLogo src={logo} />

      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Container2>
            <Grid item xs={3}>
              <Grid2>
                <Image2 src={CookImg} />
              </Grid2>
            </Grid>
            <Grid item xs={3}>
              <Grid2>
                Discover Cooks <br /> Around You
              </Grid2>
            </Grid>
            <Grid item xs={3}>
              <Grid2>
                View a Variety <br /> of Menus
              </Grid2>
            </Grid>
            <Grid item xs={3}>
              <Grid2>
                Get a Taste <br /> of Home
              </Grid2>
            </Grid>
          </Container2>
        </Grid>

        <CookContainer>
          <Cook>
            Become a <span style={{ color: "#43c187" }}>Cook</span>
          </Cook>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <CookDiv>
                <Number>1</Number>
                <Heading>
                  Create Your <br /> Own Menu
                </Heading>
                <br />
                <p>
                  Make your desired menu full with your specialties. Be diverse
                  with different cuisines or specialize with one!
                </p>
              </CookDiv>
            </Grid>
            <Grid item xs={4}>
              <CookDiv>
                <Number>2</Number>
                <Heading>
                  Receive <br />
                  Orders
                </Heading>
                <br />
                <p>
                  Receive daily orders from different customers. You can change
                  the order status from pending to ready to delivered.
                </p>
              </CookDiv>
            </Grid>
            <Grid item xs={4}>
              <CookDiv>
                <Number>3</Number>
                <Heading>
                  Chat with <br /> Customers
                </Heading>
                <br />{" "}
                <p>
                  Establish a connection with customers by chatting with them.
                  Agree with the customers on the means of delivery.
                </p>
              </CookDiv>
            </Grid>
          </Grid>
        </CookContainer>
      </Container>
    </>
  );
};

export default LandingPage;
