import React from "react";
import { useSelector } from "react-redux";
import { Nav, NavUl, NavLogoDiv } from "../styles/Container.style";
import { List } from "../styles/Links.style";
import { NavLogo, ProfileIcon } from "../styles/Image.style";
import Logo from "../assets/logo.png";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";

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
            <List>
              <NavLink to="/main-page">Explore</NavLink>
            </List>
            <List>
              <NavLink to="/orders">Orders</NavLink>
            </List>
            <List>Messages</List>
            <List>
              <NavLink to="/cook-profile">
                <ProfileIcon src={userData.profile_photo} />
                <span>
                  {userData.fname} {userData.lname}
                </span>
              </NavLink>
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
