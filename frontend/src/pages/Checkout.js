import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/system";
import { Title, Orders } from "../styles/Checkout.styles";
import SingleOrder from "../components/SingleOrder";

const Checkout = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Title>Chekout</Title>
      <Orders></Orders>
    </Container>
  );
};

export default Checkout;
