import React from "react";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  var decoded = jwt_decode(localStorage.getItem("token"));

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
              src={decoded.profile_photo}
              style={{ width: "40px", borderRadius: "50px" }}
            />
            {decoded.first_name} {decoded.last_name}
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
