import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Blob,
  MainLogo,
  Container1,
  Container2,
  Welcome,
  SubTitle,
  SignInBtn,
  SignInText,
  TypeText,
  Grid2,
  Image2,
  Cook,
  CookDiv,
  CookContainer,
  Number,
  Heading,
  ReviewContainer,
  ReviewCard,
  ReviewImage,
  ReviewName,
  ReviewText,
} from "../styles/LandingPage.style";
import logo from "../assets/3.png";
import CookImg from "../assets/user-sign-in.jpg";
import { Grid, Container } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import user3 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user1 from "../assets/user4.webp";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Container 1 */}
      <Container1></Container1>
      <Blob>
        <Welcome>Welcome to Homemade</Welcome>
        <SubTitle>For Home Cooks</SubTitle>
        <SubTitle>For Food Lovers</SubTitle>
        <SignInBtn
          onClick={() => {
            navigate("/sign-in");
            localStorage.setItem("user_type", "customer");
          }}
        >
          <SignInText>Customer</SignInText>
        </SignInBtn>
        <SignInBtn
          onClick={() => {
            navigate("/sign-in");
            localStorage.setItem("user_type", "cook");
          }}
        >
          <SignInText>Cook</SignInText>
        </SignInBtn>
      </Blob>
      <MainLogo src={logo} />

      {/* Container 2 */}
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Container2>
            <Grid item xs={3}>
              <Grid2>
                <Image2 src={CookImg} />
              </Grid2>
            </Grid>
            <Grid item xs={3}>
              <Grid2>
                Discover Cooks <br /> Around You
              </Grid2>
            </Grid>
            <Grid item xs={3}>
              <Grid2>
                View a Variety <br /> of Menus
              </Grid2>
            </Grid>
            <Grid item xs={3}>
              <Grid2>
                Get a Taste <br /> of Home
              </Grid2>
            </Grid>
          </Container2>
        </Grid>

        {/* Container 3 */}
        <CookContainer>
          <Cook>
            Become a <span style={{ color: "#43c187" }}>Cook</span>
          </Cook>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <CookDiv>
                <Number>1</Number>
                <Heading>
                  Create Your <br /> Own Menu
                </Heading>
                <br />
                <p>
                  Create your desired menu full of your specialties. Be diverse
                  with different cuisines or specialize with one!
                </p>
              </CookDiv>
            </Grid>
            <Grid item xs={4}>
              <CookDiv>
                <Number>2</Number>
                <Heading>
                  Receive <br />
                  Orders
                </Heading>
                <br />
                <p>
                  Receive daily orders from different customers. You can change
                  the order status from pending to ready to delivered.
                </p>
              </CookDiv>
            </Grid>
            <Grid item xs={4}>
              <CookDiv>
                <Number>3</Number>
                <Heading>
                  Chat with <br /> Customers
                </Heading>
                <br />{" "}
                <p>
                  Establish a connection with customers by chatting with them.
                  Agree with the customers on the means of delivery.
                </p>
              </CookDiv>
            </Grid>
          </Grid>
        </CookContainer>

        {/* Container 1 */}
        <ReviewContainer>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ReviewCard>
                <ReviewImage src={user1}></ReviewImage>
                <br />
                <ReviewName>Harry Johnson</ReviewName>
                <ReviewText>
                  I wish this website existed before! I love that i have access
                  to delicious homemade food wherever I go!
                </ReviewText>
              </ReviewCard>
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard>
                <ReviewImage src={user2}></ReviewImage>
                <br />
                <ReviewName>Ashley Jones</ReviewName>
                <ReviewText>
                  As a stay at home mom with no education, this website gave me
                  the opportunity to make money out of something I love.
                </ReviewText>
              </ReviewCard>
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard>
                <ReviewImage src={user3}></ReviewImage>
                <br />
                <ReviewName>David Wilson</ReviewName>
                <ReviewText>
                  Not only the food makes you feel like home, the website itself
                  does that as well! Very easy to use, easy to navigate and easy
                  on the eyes!
                </ReviewText>
              </ReviewCard>
            </SwiperSlide>
          </Swiper>
        </ReviewContainer>
      </Container>
    </>
  );
};

export default LandingPage;
