import React from "react";
import Navbar from "../components/Navbar";
import { MainPageContainer, SearchLocation } from "../styles/Container.style";
import { SearchBox, LocationName } from "../styles/MainPage.style";

const MainPage = () => {
  return (
    <MainPageContainer>
      <Navbar />
      <SearchLocation>
        <SearchBox placeholder="Search..."></SearchBox>
        <LocationName></LocationName>
      </SearchLocation>
    </MainPageContainer>
  );
};

export default MainPage;
