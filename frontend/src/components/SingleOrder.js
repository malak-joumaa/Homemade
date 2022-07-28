import React from "react";
import { Grid } from "@mui/material";
import {
  CartOrder,
  Photo,
  CookName,
  Answer,
  CookInfo,
  Info,
  Delete,
} from "../styles/Orders.style";

const SingleOrder = ({ cart = false, orderData }) => {
  console.log(orderData);

  // Delete order
  const deleteOrder = async (order_id) => {
    const res = await fetch(
      "http://localhost:5000/api/order/delete-order/?id=" + order_id,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  return (
    <CartOrder>
      <Grid container spacing={1}>
        <Grid item xs={1.2} lg={0.8}>
          <Photo src={orderData.dish.photo} />
        </Grid>
        <Grid item xs={6.8} lg={7.2}>
          <CookInfo>
            <CookName>{orderData.dish.name}</CookName>
            <br />
            <span>
              {orderData.dish.description} <Answer>{orderData.answer}</Answer>
            </span>
          </CookInfo>
        </Grid>
        <Grid item xs={1} align="center">
          <Info>
            {orderData.cook.user.first_name} {orderData.cook.user.last_name}
          </Info>
        </Grid>
        <Grid item xs={1} align="center">
          <Info>{orderData.quantity} items</Info>
        </Grid>
        <Grid item xs={1} align="center">
          <Info>Total:{orderData.total}$</Info>
        </Grid>
        <Grid item xs={1} align="center">
          {cart ? (
            <Delete
              onClick={() => {
                deleteOrder(orderData._id);
                window.location.reload();
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </Delete>
          ) : (
            <Info>
              <i className="fa-solid fa-location-dot"></i>
            </Info>
          )}
        </Grid>
      </Grid>
    </CartOrder>
  );
};

export default SingleOrder;
