import React from "react";
import Navbar from "../components/Navbar";
import { MainPageContainer, SearchLocation } from "../styles/Container.style";
import { SearchBox, LocationName, Title } from "../styles/MainPage.style";
import { Container, Grid, Rating } from "@mui/material";
import TopCook from "../components/TopCook";

const MainPage = () => {
  return (
    <Container maxWidth="xl">
      <MainPageContainer>
        <Navbar />
        <SearchLocation>
          <SearchBox placeholder="Search..."></SearchBox>
          <LocationName></LocationName>
        </SearchLocation>

        {/* Top Cooks */}
        <Title>Took Cooks</Title>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <TopCook />
          </Grid>
          <Grid item xs={3}>
            <TopCook />
          </Grid>
          <Grid item xs={3}>
            <TopCook />
          </Grid>
          <Grid item xs={3}>
            <TopCook />
          </Grid>
        </Grid>

        {/* New Cooks */}
        <Title>New Cooks</Title>

        {/* Menu */}
        <Title>Menu</Title>
      </MainPageContainer>
    </Container>
  );
};

export default MainPage;
