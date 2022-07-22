import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
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
import {
  MenuContainer,
  DishImg,
  DishName,
  DishDescription,
  DishPrice,
} from "../styles/Menu.style";
import defaultDish from "../assets/default-plate.jpg";

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

          <Menu>Menu</Menu>

          {/* Menu */}
          <MenuContainer>
            <Grid container spacing={1}>
              {/* Dish Image */}
              {menu?.length > 0 &&
                menu[5].dishes.map((dish, index) => (
                  <Grid
                    key={index}
                    item
                    xl={3}
                    lg={4}
                    md={6}
                    xs={12}
                    style={{ position: "relative" }}
                  >
                    <Grid container spacing={0}>
                      <Grid item xs={4.5}>
                        <DishImg
                          src={
                            menu[5].dishes[index].photo
                              ? menu[5].dishes[index].photo
                              : defaultDish
                          }
                        />
                      </Grid>
                      {/* Dish Info */}
                      <Grid item xs={6}>
                        <DishName>{menu[5].dishes[index].name}</DishName>
                        <br />
                        <DishPrice>{menu[5].dishes[index].price}$</DishPrice>
                        <br />
                        <DishDescription>
                          {menu[5].dishes[index].description}
                        </DishDescription>
                      </Grid>
                      <Grid item xs={1.5}>
                        <Modal data={menu[5].dishes[index]} />
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
            </Grid>
          </MenuContainer>
          {/* </div> */}
        </Container>
      )}
    </>
  );
}

export default SingleCook;
