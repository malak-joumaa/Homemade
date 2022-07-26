import React from "react";
import Navbar from "../components/Navbar";
import { MainPageContainer, SearchLocation } from "../styles/Container.style";
import { SearchBox, LocationName, Title } from "../styles/MainPage.style";
import { Container, Grid, Rating } from "@mui/material";
import TopCook from "../components/TopCook";
import NewCook from "../components/NewCook";
import Menu from "../components/Menu";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
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
        {/* <Grid container spacing={6}>
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
        </Grid> */}

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TopCook />
          </SwiperSlide>
          <SwiperSlide>
            <TopCook></TopCook>
          </SwiperSlide>
          <SwiperSlide>
            <TopCook></TopCook>
          </SwiperSlide>
          <SwiperSlide>
            <TopCook></TopCook>
          </SwiperSlide>
          <SwiperSlide>
            <TopCook></TopCook>
          </SwiperSlide>
          <SwiperSlide>
            <TopCook></TopCook>
          </SwiperSlide>
        </Swiper>

        {/* New Cooks */}
        <Title>New Cooks</Title>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <NewCook />
          </SwiperSlide>
          <SwiperSlide>
            <NewCook />
          </SwiperSlide>
          <SwiperSlide>
            <NewCook />
          </SwiperSlide>
          <SwiperSlide>
            <NewCook />
          </SwiperSlide>
          <SwiperSlide>
            <NewCook />
          </SwiperSlide>
          <SwiperSlide>
            <NewCook />
          </SwiperSlide>
        </Swiper>

        {/* Menu */}
        <Title>Menu</Title>
        <Menu />
        <Menu />
        <Menu />
        <Menu />
      </MainPageContainer>
    </Container>
  );
};

export default MainPage;
