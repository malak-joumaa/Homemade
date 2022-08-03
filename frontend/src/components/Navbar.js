import React from "react";
import { useSelector } from "react-redux";
import { Nav, NavUl, NavLogoDiv, Name } from "../styles/Container.style";
import { List } from "../styles/Links.style";
import { NavLogo, ProfileIcon1, ProfileIcon2 } from "../styles/Image.style";
import Logo from "../assets/logo.png";
import { Container } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const userData = useSelector((state) => state.login);
  const navigate = useNavigate();
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
            {userData.cook_id == "" && (
              <List>
                <NavLink to="/orders">Orders</NavLink>
              </List>
            )}
            <List>
              <NavLink to="/chat">Messages</NavLink>
            </List>
            <List>
              {userData.customer_id == "" ? (
                <NavLink to="/cook-profile">
                  <div style={{ display: "flex" }} className="dropdown">
                    {userData.fname} {userData.lname}
                    <ProfileIcon1 src={userData.profile_photo} />
                  </div>
                </NavLink>
              ) : (
                <>
                  <div style={{ display: "flex" }} className="dropdown">
                    <Name>
                      {userData.fname} {userData.lname}
                    </Name>
                    <ProfileIcon2 src={userData.profile_photo} />
                  </div>
                  <div
                    className="dropdown-content"
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    <NavLink to="/">
                      <div>
                        Logout{" "}
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </div>
                    </NavLink>
                  </div>
                </>
              )}
            </List>
          </NavUl>
        </div>
      </Nav>
    </Container>
  );
};

export default Navbar;
