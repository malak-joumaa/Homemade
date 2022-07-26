import React from "react";
import Navbar from "../components/Navbar";
import { MainPageContainer, SearchLocation } from "../styles/Container.style";
import { SearchBox, LocationName, Title } from "../styles/MainPage.style";
import { Container, Grid } from "@mui/material";

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
        <Title>New Cooks</Title>
        <Title>Menu</Title>
      </MainPageContainer>
    </Container>
  );
};

export default MainPage;
