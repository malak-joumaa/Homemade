import React from "react";
import { useSelector } from "react-redux";
import { Nav, Nav_ul, Nav_Logo_Div } from "../styles/Container.style";
import { List } from "../styles/Links.style";
import { Nav_Logo, Profile_Icon } from "../styles/Image.style";
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
            <Profile_Icon src={userData.profile_photo} />
            <span>
              {userData.fname} {userData.lname}
            </span>
          </List>
          <List>
            <i class="fa-solid fa-bars"></i>
          </List>
        </Nav_ul>
      </div>
    </Nav>
  );
};

export default Navbar;
