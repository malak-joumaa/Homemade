import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/system";
import { Title, Orders } from "../styles/Checkout.styles";
import SingleOrder from "../components/SingleOrder";
import { useSelector } from "react-redux";

const Checkout = () => {
  const orderData = useSelector((state) => state.order);
  console.log(orderData);
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Title>Chekout</Title>
      <Orders>
        {orderData.map((order, index) => (
          <>
            <SingleOrder cart={false} orderData={orderData[index]} />
          </>
        ))}
      </Orders>
    </Container>
  );
};

export default Checkout;
