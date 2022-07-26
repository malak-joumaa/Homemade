import React from "react";
import Navbar from "../components/Navbar";
import { MainPageContainer, SearchLocation } from "../styles/Container.style";
import {
  SearchBox,
  LocationName,
  Title,
  TopContainer,
  TopPhoto,
  TopName,
  TopProfileLink,
  PhotoName,
  IconsBox,
  Icon,
  IconWrapper,
} from "../styles/MainPage.style";
import { Container, Grid, Rating } from "@mui/material";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";

const MainPage = () => {
  return (
    <Container maxWidth="xl">
      <MainPageContainer>
        <Navbar />
        <SearchLocation>
          <SearchBox placeholder="Search..."></SearchBox>
          <LocationName></LocationName>
        </SearchLocation>
        <Title>Took Cooks</Title>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <TopContainer>
              <PhotoName>
                <TopPhoto></TopPhoto>
                <TopName>Amina Aboud</TopName>
              </PhotoName>
              <IconsBox>
                <IconWrapper>
                  <Icon src={Icon1}></Icon>
                </IconWrapper>
                <IconWrapper>
                  <Icon src={Icon2}></Icon>
                </IconWrapper>
                <IconWrapper>
                  <Icon src={Icon3}></Icon>
                </IconWrapper>
              </IconsBox>
              <br />
              <TopProfileLink>Check Profile -{">"}</TopProfileLink>
            </TopContainer>
          </Grid>
        </Grid>
        <Title>New Cooks</Title>
        <Title>Menu</Title>
      </MainPageContainer>
    </Container>
  );
};

export default MainPage;
