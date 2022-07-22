import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/system";
import {
  Title,
  Orders,
  Total,
  SubTitle,
  Button,
} from "../styles/Checkout.styles";
import SingleOrder from "../components/SingleOrder";
import { useSelector } from "react-redux";

const Checkout = () => {
  const orderData = useSelector((state) => state.order);
  const [time, setTime] = useState("");
  const [isValid, setIsValid] = useState(false);

  console.log(orderData);

  var total = 0;
  for (let i = 0; i < orderData.length; i++) {
    total += orderData[i].total;
  }
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Title>Checkout</Title>
      <Orders>
        {orderData.map((order, index) => (
          <>
            <SingleOrder cart={false} orderData={orderData[index]} />
          </>
        ))}
      </Orders>
      <Total>Total: {total}$</Total>
      <SubTitle>Location:</SubTitle>
      <SubTitle>Pickup Hour:</SubTitle>
      <input
        type="time"
        className="oph"
        name="oph"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
        required
        id={!isValid ? "" : "oph-validity"}
        onClick={(e) => {
          setIsValid(true);
        }}
        style={{ marginLeft: "0px" }}
      />
      <br />
      <Button>Confirm</Button>
    </Container>
  );
};

export default Checkout;
