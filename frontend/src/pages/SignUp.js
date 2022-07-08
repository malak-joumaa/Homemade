import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const SignUp = () => {
  return (
    <div className="main-container">
      <div className="register sign-up">
        {/* Logo */}
        {/* <div className="logo-div">
          <img src={Logo} className="register-logo" />
        </div> */}
        {/* Sign up form */}
        <div id="form">
          <h1>Sign Up</h1>
          <div className="left-register left-sign-up">
            <label>First Name</label>
            <br />
            <input type="text" id="f_name" />
            <br />
            <label>Last Name</label>
            <br />
            <input type="text" id="l_name" />
            <br />
            <label>Email</label>
            <br />
            <input type="email" id="email" />
          </div>
          <div className="right-register">
            <label>Password</label>
            <br />
            <input type="password" id="password" />
            <br />
            <label>Confirm Password</label>
            <br />
            <input type="password" id="c_password" />
            <br />
            <label>Phone number</label>
            <br />
            <input type="text" id="phone_number" />
          </div>
          <br />
          <button onClick={() => {}}>Sign Up</button>
          <br />
          {/* Sign Up */}
          <p>{/* Don't have an account? <Link to="/sign-up"></Link> */}</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
