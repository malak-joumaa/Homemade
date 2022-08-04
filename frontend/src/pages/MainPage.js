import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { MainPageContainer, SearchLocation } from "../styles/Container.style";
import { SearchBox, LocationName, Title, Loc } from "../styles/MainPage.style";
import { Container, Grid, Rating } from "@mui/material";
import TopCook from "../components/TopCook";
import NewCook from "../components/NewCook";
import Menu from "../components/Menu";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useSelector } from "react-redux";
import LocationModal from "../components/maps/LocationModal";

const MainPage = () => {
  const userData = useSelector((state) => state.login);
  const [cooks, setCooks] = useState([]);
  const [modal, setMapsModal] = useState(false);
  const [color, setColor] = useState(false);

  // for maps
  const [selectedPosition, setSelectedPosition] = useState(
    userData.location.coordinates
  );
  const [locationName, setLocationName] = useState(userData.location.location);
  const toggleMapsModal = () => setMapsModal(!modal);
  const toggleColor = () => setColor(!color);

  // for filtering new and top cooks
  var top_count = 1;
  var new_count = 1;
  var d1 = new Date();
  var d2 = new Date(cooks[0]?.createdAt);

  useEffect(() => {
    if (selectedPosition) {
      getCooks();
    }
  }, [selectedPosition]);

  // get all cooks
  const getCooks = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/user/get-cooks?location1=" +
          selectedPosition[0] +
          "&location2=" +
          selectedPosition[1]
      );
      const data = await response.json();
      setCooks(data);
    } catch (err) {}
  };
  localStorage.setItem("newLocation", JSON.stringify(selectedPosition));

  return (
    <Container maxWidth="xl">
      <MainPageContainer>
        <Navbar />
        {/* Search */}
        <SearchLocation>
          <LocationName
            color={color}
            onClick={() => {
              toggleMapsModal();
              toggleColor();
            }}
          >
            <Loc className="fa-solid fa-location-dot"></Loc>
            {locationName}
          </LocationName>
        </SearchLocation>

        {/* Maps Modal */}
        <LocationModal
          toggleMapsModal={toggleMapsModal}
          modal={modal}
          route={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          locationName={locationName}
          setLocationName={setLocationName}
        />

        {/* Top Cooks */}
        <Title>Top Cooks</Title>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper"
        >
          {cooks
            ?.filter((cook) => cook.rate >= 4.5)
            .map((cook) => (
              <SwiperSlide key={cook._id}>
                <TopCook
                  id={cook._id}
                  photo={cook.user.profile_photo}
                  fname={cook.user.first_name}
                  lname={cook.user.last_name}
                  count={
                    top_count == 5
                      ? ((top_count = 1), top_count++)
                      : top_count++
                  }
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
                new Date(cook.createdAt).getMonth() == new Date().getMonth() - 1
            )
            .map((cook) => (
              <SwiperSlide key={cook._id}>
                <NewCook
                  id={cook._id}
                  photo={cook.user.profile_photo}
                  fname={cook.user.first_name}
                  lname={cook.user.last_name}
                  count={
                    new_count == 5
                      ? ((new_count = 1), new_count++)
                      : new_count++
                  }
                />
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Menu */}
        <Title>Menus</Title>
        <SearchBox placeholder="Search..."></SearchBox>

        {/* Map cooks over menu */}
        {cooks
          ?.filter((cook) => !!cook.menu)
          .map((cook) => (
            <Menu
              menu={[cook.menu]}
              disable={true}
              main_page={true}
              key={cook._id}
              profile={cook.user.profile_photo}
              id={cook._id}
              name={`${cook.user.first_name} ${cook.user.last_name}`}
            />
          ))}
      </MainPageContainer>
    </Container>
  );
};

export default MainPage;
