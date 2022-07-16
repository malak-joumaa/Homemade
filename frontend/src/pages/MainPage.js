import React from "react";
import Navbar from "../components/Navbar";
import {
  Main_Page_Container,
  Search_Location,
} from "../styles/Container.style";
import { Search_box, Location_name } from "../styles/MainPage.style";

const MainPage = () => {
  return (
    <Main_Page_Container>
      <Navbar />
      <Search_Location>
        <Search_box placeholder="Search..."></Search_box>
        <Location_name></Location_name>
      </Search_Location>
    </Main_Page_Container>
  );
};

export default MainPage;
