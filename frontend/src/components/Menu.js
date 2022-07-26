import React, { useState } from "react";
import { Grid } from "@mui/material";
import Modal from "../components/Modal";
import {
  MenuContainer,
  DishImg,
  DishName,
  DishDescription,
  DishPrice,
} from "../styles/Menu.style";
import defaultDish from "../assets/default-plate.jpg";

const Menu = ({ menu, disable = false }) => {
  return (
    <>
      <MenuContainer>
        <Grid container spacing={1}>
          {/* Dish Image */}
          {menu[0].dishes.map((dish, index) => (
            <Grid
              key={index}
              item
              xl={disable ? 4 : 3}
              lg={4}
              md={6}
              xs={12}
              style={{ position: "relative" }}
            >
              <Grid container spacing={0}>
                <Grid item xs={4.5}>
                  <DishImg src={dish.photo ? dish.photo : defaultDish} />
                </Grid>
                {/* Dish Info */}
                <Grid item xs={6}>
                  <DishName>{dish.name}</DishName>
                  <br />
                  <DishPrice>{dish.price}$</DishPrice>
                  <br />
                  <DishDescription>{dish.description}</DishDescription>
                </Grid>
                {disable === false && (
                  <Grid item xs={1.5}>
                    <Modal data={menu[0].dishes[index]} />
                  </Grid>
                )}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </MenuContainer>
      {/* )} */}
    </>
  );
};

export default Menu;
