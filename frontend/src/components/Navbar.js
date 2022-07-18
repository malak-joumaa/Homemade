import React from "react";
import { useSelector } from "react-redux";
import { Nav, NavUl, NavLogoDiv } from "../styles/Container.style";
import { List } from "../styles/Links.style";
import { NavLogo, ProfileIcon } from "../styles/Image.style";
import Logo from "../assets/logo.png";
import { Container } from "@mui/material";

const Navbar = () => {
  const userData = useSelector((state) => state.login);
  console.log(userData);
  return (
    <Container maxWidth="xl">
      <Nav>
        <NavLogoDiv>
          <NavLogo src={Logo} />
        </NavLogoDiv>
        <div>
          <NavUl>
            <List>Explore</List>
            <List>Orders</List>
            <List>Messages</List>
            <List>
              <ProfileIcon src={userData.profile_photo} />
              <span>
                {userData.fname} {userData.lname}
              </span>
            </List>
            <List>
              <i class="fa-solid fa-bars"></i>
            </List>
          </NavUl>
        </div>
      </Nav>
    </Container>
  );
};

export default Navbar;
