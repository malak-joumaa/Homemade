import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Grid, Container, Rating } from "@mui/material";
import {
  Cook_Name,
  Info_Container,
  Description,
  Opening_Hours,
  Title,
  Messages,
} from "../styles/SingleCook.styles";
import Menu from "../components/Menu";
import { Display_Cook_Image } from "../styles/Image.style";

function SingleCook() {
  const navigate = useNavigate();
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
        "http://localhost:5000/api/user/get-cook?id=" +
          localStorage.getItem("cook_id")
      ).then(async (res) => {
        const data = await res.json();
        // console.log(data);
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
      const res2 = await fetch(
        "http://localhost:5000/api/menu/get-menu?id=" +
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

  // Create Chat
  const createChat = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/chat/add-convo", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          members: ["62e161b3a3bef4c5101d59bc", "62dff826486c6987659535fc"],
        }),
      });
      const data = await res.json();
      console.log(data);
      navigate("/chat");
    } catch (err) {
      console.log(err);
    }
  };

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
                <Description>{cook?.description}</Description>
              </Grid>
              <Grid item xs={2}>
                <Rating
                  name="half-rating-read"
                  precision={0.5}
                  value={cook.rate}
                  readOnly
                />
                <Messages
                  className="fa-solid fa-comment-dots"
                  onClick={createChat}
                ></Messages>
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
