import React from "react";
import Navbar from "../components/Navbar";
import { Rating, Grid, Container } from "@mui/material";
import { useSelector } from "react-redux";
import hat from "../assets/hat.png";
import {
  Hat,
  ProfilePhoto,
  ProfileInfo,
  Name,
  Description,
  Rate,
  Button,
} from "../styles/Profile.style";

const CookProfile = () => {
  const userData = useSelector((state) => state.login);
  console.log(userData);

  return (
    <Container maxWidth="xl">
      <Navbar />
      <ProfileInfo>
        <Grid container spacing={1}>
          <Grid item lg={2} md={3} sm={4} xs={12}>
            <Hat src={hat} />
            <ProfilePhoto src={userData.profile_photo} alt="profile" />
          </Grid>
          <Grid item lg={8} md={7} sm={5} xs={12}>
            <Name>
              {userData.fname} {userData.lname}
            </Name>
            <Description>{userData.description}</Description>
          </Grid>
          <Grid item lg={2} md={2} sm={3} xs={12}>
            <Rate>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={userData.rate}
                readOnly
              />
            </Rate>
          </Grid>
        </Grid>
      </ProfileInfo>

      {/* Functionalities */}
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Button>
            <i class="bx bx-shopping-bag"></i> Orders
          </Button>
          <Button>
            <i className="fa-solid fa-bars"></i> Menu
          </Button>
          <Button>
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </Button>
        </Grid>
        <Grid item xs={9}></Grid>
      </Grid>
    </Container>
  );
};

export default CookProfile;
