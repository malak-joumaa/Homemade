import React from "react";

const Navbar = () => {
  return (
    <div>
      <div></div>
      <div>
        <ul>
          <li>Explore</li>
          <li>Orders</li>
          <li>Messages</li>
          <li>
            {" "}
            {localStorage.getItem("fname")} {localStorage.getItem("lname")}
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
