import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const orderData = useSelector((state) => state.order);
  const [time, setTime] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Update Order
  const updateOrder = async () => {
    orderData.forEach(async (singleOrder) => {
      console.log(singleOrder);
      const res = await fetch(
        "http://localhost:5000/api/order/update-order/?id=" + singleOrder._id,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            status: "pending",
            pickup_hours: [time],
            route: [],
          }),
        }
      );
    });
    navigate("/orders");
  };

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
      <Button
        onClick={() => {
          console.log("click");
          updateOrder();
        }}
      >
        Confirm
      </Button>
    </Container>
  );
};

export default Checkout;
