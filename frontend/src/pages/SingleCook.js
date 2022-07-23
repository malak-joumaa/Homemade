import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Grid, Container, Rating } from "@mui/material";
import {
  Cook_Name,
  Info_Container,
  Description,
  Opening_Hours,
  Title,
} from "../styles/SingleCook.styles";
import Menu from "../components/Menu";
import { Display_Cook_Image } from "../styles/Image.style";

function SingleCook() {
  const [cook, setCook] = useState([]);
  const [menu, setMenu] = useState([]);
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
    getMenu();
  }, []);

  // Get Cook Details
  const getCook = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/cook/display-cook?id=" +
          localStorage.getItem("cook_id")
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

  // Get Menu Data
  const getMenu = async () => {
    try {
      console.log("here");
      const res2 = await fetch(
        "http://localhost:5000/api/cook/get-menu?id=" +
          localStorage.getItem("cook_id")
      ).then(async (res2) => {
        const data2 = await res2.json();
        console.log(data2);
        setMenu(data2);
      });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(menu);
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

          <Title>Menu</Title>

          {/* Menu */}
          <Menu menu={menu} />
          {/* </div> */}
        </Container>
      )}
    </>
  );
}

export default SingleCook;
