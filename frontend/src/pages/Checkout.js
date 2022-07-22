import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/system";
import { Title, Orders, Total } from "../styles/Checkout.styles";
import SingleOrder from "../components/SingleOrder";
import { useSelector } from "react-redux";

const Checkout = () => {
  const orderData = useSelector((state) => state.order);
  console.log(orderData);

  var total = 0;
  for (let i = 0; i < orderData.length; i++) {
    total += orderData[i].total;
  }
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
      <Total>Total: {total}$</Total>
    </Container>
  );
};

export default Checkout;
