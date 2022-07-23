import React from "react";
import Navbar from "../components/Navbar";
import { Rating, Grid, Container } from "@mui/material";
import { useSelector } from "react-redux";
import hat from "../assets/hat.png";

const CookProfile = () => {
  const userData = useSelector((state) => state.login);
  console.log(userData);

  return (
    <Container maxWidth="xl">
      <Navbar />
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <img src={hat} />
          <img src={userData.profile_photo} alt="profile" />
        </Grid>
        <Grid item xs={8}>
          <p>{userData.description}</p>
        </Grid>
        <Grid item xs={2}>
          <Rating
            name="half-rating-read"
            precision={0.5}
            value={userData.rate}
            readOnly
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CookProfile;
