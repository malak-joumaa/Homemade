import React from "react";
import { useSelector } from "react-redux";
import { Nav, NavUl, NavLogoDiv, Name } from "../styles/Container.style";
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
              {userData.customer_id == "" ? (
                <NavLink to="/add-menu">Menu</NavLink>
              ) : (
                <NavLink to="/orders">Orders</NavLink>
              )}
            </List>
            <List>
              <NavLink to="/chat">Messages</NavLink>
            </List>
            <List>
              <NavLink to="/cook-profile">
                <div style={{ display: "flex" }} className="dropdown">
                  <Name>
                    {userData.fname} {userData.lname}
                  </Name>
                  <ProfileIcon src={userData.profile_photo} />
                </div>
                <div className="dropdown-content">
                  <div>
                    Logout <i className="fa-solid fa-right-from-bracket"></i>
                  </div>
                </div>
              </NavLink>
            </List>
          </NavUl>
        </div>
      </Nav>
    </Container>
  );
};

export default Navbar;
