import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";

import {
  Cook_Name,
  Info_Container,
  Description,
  Opening_Hours,
} from "../styles/SingleCook.styles";
import { Display_Cook_Image } from "../styles/Image.style";
import { Flex_container } from "../styles/Container.style";

function SingleCook() {
  return (
    <div>
      <Navbar />
      <Info_Container>
        <Display_Cook_Image></Display_Cook_Image>
        <Cook_Name>Lama Tahan</Cook_Name>

        <Flex_container>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Description>
            </Grid>
            <Grid item xs={2}>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={5}
                readOnly
              />
            </Grid>
          </Grid>
        </Flex_container>
        <Opening_Hours>Opening Hours:</Opening_Hours>
      </Info_Container>
    </div>
  );
}

export default SingleCook;
