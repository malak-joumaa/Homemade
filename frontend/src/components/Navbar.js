import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const userData = useSelector((state) => state.login);
  console.log(userData);
  return (
    <div>
      <div></div>
      <div>
        <ul>
          <li>Explore</li>
          <li>Orders</li>
          <li>Messages</li>
          <li>
            <img
              src={userData.profile_photo}
              style={{ width: "40px", borderRadius: "50px" }}
            />
            {userData.fname} {userData.lname}
          </li>
          <li>Notifications</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
