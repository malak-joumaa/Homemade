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
  return (
    <CartOrder>
      <Grid container spacing={1}>
        <Grid item xs={0.8}>
          <Photo src={orderData.dish.photo} />
        </Grid>
        <Grid item xs={8.2}>
          <CookInfo>
            <CookName>{orderData.dish.name}</CookName>
            <br />
            <span>
              {orderData.dish.description} <Answer>{orderData.answer}</Answer>
            </span>
          </CookInfo>
        </Grid>
        <Grid item xs={1}>
          <Info>{orderData.quantity} items</Info>
        </Grid>
        <Grid item xs={1}>
          <Info>Total:{orderData.total}$</Info>
        </Grid>
        <Grid item xs={1} align="center">
          {cart ? (
            <Delete>
              <i className="fa-solid fa-trash"></i>
            </Delete>
          ) : (
            <Info>{orderData.pickup_hours}</Info>
          )}
        </Grid>
      </Grid>
    </CartOrder>
  );
};

export default SingleOrder;
