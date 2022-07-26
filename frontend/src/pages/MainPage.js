import React, { useState, useEffect } from "react";
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
  const [cooks, setCooks] = useState([]);
  const [newCooks, setNewCooks] = useState([]);

  var d1 = new Date();
  var d2 = new Date(cooks[0]?.createdAt);

  console.log(d1.getMonth() === d2.getMonth());

  useEffect(() => {
    getCooks();
  }, []);

  // get all cooks
  const getCooks = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/user/auth/get-cooks"
      );
      const data = await response.json();
      setCooks(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(cooks);

  return (
    <Container maxWidth="xl">
      <MainPageContainer>
        <Navbar />
        <SearchLocation>
          <SearchBox placeholder="Search..."></SearchBox>
          <LocationName></LocationName>
        </SearchLocation>

        {/* Top Cooks */}
        <Title>Top Cooks</Title>
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
          {cooks
            ?.filter((cook) => cook.rate > 4)
            .map((cook) => (
              <SwiperSlide key={cook._id}>
                <TopCook
                  id={cook._id}
                  photo={cook.user.profile_photo}
                  fname={cook.user.first_name}
                  lname={cook.user.last_name}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        {/* New Cooks */}
        <Title>New Cooks</Title>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper"
        >
          {cooks
            ?.filter(
              (cook) =>
                new Date(cook.createdAt).getMonth() == new Date().getMonth() ||
                new Date(cook.createdAt).getMonth() == new Date().getMonth() + 1
            )
            .map((cook) => (
              <SwiperSlide key={cook._id}>
                <NewCook
                  id={cook._id}
                  photo={cook.user.profile_photo}
                  fname={cook.user.first_name}
                  lname={cook.user.last_name}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Menu */}
        <Title>Menu</Title>
        {/* Map cooks over menu */}
        {cooks
          ?.filter((cook) => !!cook.menu)
          .map((cook) => (
            <Menu menu={cook.menu} disable={true} key={cook._id} />
          ))}
      </MainPageContainer>
    </Container>
  );
};

export default MainPage;
