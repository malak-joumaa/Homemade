import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Rating, Grid, Container } from "@mui/material";
import {
  Cook_Name,
  Info_Container,
  Description,
  Opening_Hours,
  Day,
  Menu,
} from "../styles/SingleCook.styles";
import { Display_Cook_Image } from "../styles/Image.style";
import { MenuContainer } from "../styles/Menu.style";

function SingleCook() {
  const [cook, setCook] = useState([]);
  const [loading, setLoading] = useState(true);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    getCook();
  }, []);

  // Get Cook Details
  const getCook = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/cook/display-cook?id=62cf9ca1c3f55e7c6b16e4b6"
        //localStorage.getItem("cook_id")
      ).then(async (res) => {
        const data = await res.json();
        console.log(data);
        setCook(data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(cook);
  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && (
        <Container maxWidth="xl">
          <Navbar />
          <Info_Container>
            <Display_Cook_Image
              src={cook.user.profile_photo}
            ></Display_Cook_Image>
            <Cook_Name>
              {cook?.user?.first_name} {cook?.user?.last_name}
            </Cook_Name>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <Description>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Description>
              </Grid>
              <Grid item xs={2}>
                <Rating
                  name="half-rating-read"
                  precision={0.5}
                  value={cook.rate}
                  readOnly
                />
              </Grid>
            </Grid>
            <Opening_Hours>
              Opening Hours:{" "}
              {cook?.opening_hours?.length > 0 && cook.opening_hours[0]} -&gt;{" "}
              {cook?.opening_hours?.length > 0 && cook.opening_hours[1]}
            </Opening_Hours>
          </Info_Container>

          <Menu>Menu</Menu>

          {/* Days */}
          <Grid container spacing={1} columns={7}>
            {days.map((day, index) => (
              <Grid item xs={1} textAlign="center">
                <Day key={index}>{day}</Day>
              </Grid>
            ))}
          </Grid>

          {/* Menu */}
          <MenuContainer></MenuContainer>
          {/* </div> */}
        </Container>
      )}
    </>
  );
}

export default SingleCook;
