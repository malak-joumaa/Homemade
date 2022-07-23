import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { Rating, Grid, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import hat from "../assets/hat.png";
import {
  Hat,
  ProfilePhoto,
  ProfileInfo,
  Name,
  Description,
  Rate,
  Button,
} from "../styles/Profile.style";
import OrderTable from "../components/OrderTable";

const CookProfile = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.login);
  console.log(userData);

  const [menu, setMenu] = useState([]);
  const [isOrder, setIsOrder] = useState(true);
  const [isMenu, setIsMenu] = useState(false);

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

  return (
    <Container maxWidth="xl">
      <Navbar />
      <ProfileInfo>
        <Grid container spacing={1}>
          <Grid item lg={2} md={3} sm={4} xs={12}>
            <Hat src={hat} />
            <ProfilePhoto src={userData.profile_photo} alt="profile" />
          </Grid>
          <Grid item lg={8} md={7} sm={5} xs={12}>
            <Name>
              {userData.fname} {userData.lname}
            </Name>
            <Description>{userData.description}</Description>
          </Grid>
          <Grid item lg={2} md={2} sm={3} xs={12}>
            <Rate>
              <Rating
                name="half-rating-read"
                precision={0.5}
                value={userData.rate}
                readOnly
              />
            </Rate>
          </Grid>
        </Grid>
      </ProfileInfo>

      {/* Functionalities */}
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Button
            onClick={() => {
              setIsOrder(true);
              setIsMenu(false);
            }}
          >
            <i class="bx bx-shopping-bag"></i> Orders
          </Button>
          <br />

          <Button
            onClick={() => {
              getMenu();
              setIsOrder(false);
              setIsMenu(true);
            }}
          >
            <i className="fa-solid fa-bars"></i> Menu
          </Button>
          <br />
          <Button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </Button>
          <br />
        </Grid>
        <Grid item xs={10}>
          {isMenu && <Menu menu={menu} disable={true} />}
          {isOrder && <OrderTable />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CookProfile;
