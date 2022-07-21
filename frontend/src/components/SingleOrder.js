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

const SingleOrder = () => {
  return (
    <CartOrder>
      <Grid container spacing={1}>
        <Grid item xs={0.8}>
          <Photo />
        </Grid>
        <Grid item xs={7.2}>
          <CookInfo>
            <CookName>Cook Name</CookName>
            <br />
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              rem officia, corrupti minima nisi modi. <Answer>Spicy</Answer>
            </span>
          </CookInfo>
        </Grid>
        <Grid item xs={1}>
          <Info>Chef's name</Info>
        </Grid>
        <Grid item xs={1}>
          <Info>3 items</Info>
        </Grid>
        <Grid item xs={1}>
          <Info>Total:15$</Info>
        </Grid>
        <Grid item xs={1} align="center">
          <Delete>
            <i class="fa-solid fa-trash"></i>
          </Delete>
        </Grid>
      </Grid>
    </CartOrder>
  );
};

export default SingleOrder;
