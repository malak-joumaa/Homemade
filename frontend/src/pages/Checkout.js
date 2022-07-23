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
  var OrderIDs = [];
  var total = 0;
  orderData.forEach((order) => {
    if (order.status == "cart") {
      OrderIDs.push(order._id);
      total += order.total;
    }
  });

  console.log(OrderIDs);

  // Add Submitted Order
  const SubmitOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/order/add-sub-order", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          total: total,
          cook: localStorage.getItem("cook_id"),
          customer: localStorage.getItem("customer_id"),
          status: "pending",
          pickup_hours: [time],
          route: [],
          orders: OrderIDs,
        }),
      });
      const data2 = await res.json();
      console.log(data2);
    } catch (error) {
      console.log(error);
    }
  };
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
          }),
        }
      );
    });
    navigate("/orders");
  };
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Title>Checkout</Title>
      <Orders>
        {orderData.map((order, index) => (
          <>
            {order.status === "cart" && (
              <SingleOrder cart={false} orderData={orderData[index]} />
            )}
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
          SubmitOrder();
          updateOrder();
        }}
      >
        Confirm
      </Button>
    </Container>
  );
};

export default Checkout;
