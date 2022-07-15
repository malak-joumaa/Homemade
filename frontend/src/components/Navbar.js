import React from "react";
import { useSelector } from "react-redux";
import { Nav, Nav_ul, Nav_Logo_Div } from "../styles/Container.style";
import { List } from "../styles/Links.style";
import { Nav_Logo } from "../styles/Image.style";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const userData = useSelector((state) => state.login);
  console.log(userData);
  return (
    <Nav>
      <Nav_Logo_Div>
        <Nav_Logo src={Logo} />
      </Nav_Logo_Div>
      <div>
        <Nav_ul>
          <List>Explore</List>
          <List>Orders</List>
          <List>Messages</List>
          <List>
            <img
              src={userData.profile_photo}
              style={{ width: "40px", borderRadius: "50px" }}
            />
            {userData.fname} {userData.lname}
          </List>
          <List>Notifications</List>
        </Nav_ul>
      </div>
    </Nav>
  );
};

export default Navbar;
