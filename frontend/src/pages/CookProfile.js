import React from "react";
import Navbar from "../components/Navbar";
import { Rating, Grid, Container } from "@mui/material";
import { useSelector } from "react-redux";

const CookProfile = () => {
  const userData = useSelector((state) => state.login);
  console.log(userData);
  return (
    <Container maxWidth="xl">
      <Navbar />
    </Container>
  );
};

export default CookProfile;
