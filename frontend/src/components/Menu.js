import React from "react";
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
  console.log(menu);
  return (
    <MenuContainer>
      <Grid container spacing={1}>
        {/* Dish Image */}
        {menu?.length > 0 &&
          menu[0].dishes.map((dish, index) => (
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
                  <DishImg
                    src={
                      menu[0].dishes[index].photo
                        ? menu[0].dishes[index].photo
                        : defaultDish
                    }
                  />
                </Grid>
                {/* Dish Info */}
                <Grid item xs={6}>
                  <DishName>{menu[0].dishes[index].name}</DishName>
                  <br />
                  <DishPrice>{menu[0].dishes[index].price}$</DishPrice>
                  <br />
                  <DishDescription>
                    {menu[0].dishes[index].description}
                  </DishDescription>
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
  );
};

export default Menu;
