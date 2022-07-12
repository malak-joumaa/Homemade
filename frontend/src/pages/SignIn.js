import React, { useState } from "react";
import { Link } from "react-router-dom";
import User_Sign_In from "../assets/chef.jpg";
import Logo from "../assets/logo.png";
import jwt_decode from "jwt-decode";
import Textbox from "../components/Textbox";
import Button from "../components/Button";

const SignIn = () => {
  // Email and password use state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login api
  const signIn = async () => {
    const res = await fetch("http://localhost:5000/api/user/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    console.log(data);
    var token = data.token;
    // Saving token in local storage
    window.localStorage.setItem("token", token);
    // Decode JWT
    var decoded = jwt_decode(token);
    console.log(decoded);
    window.localStorage.setItem("first_name", decoded.first_name);
    window.localStorage.setItem("last_name", decoded.last_name);
    window.localStorage.setItem("customer_id", decoded._id);
  };

  return (
    <div className="main-container">
      <div className="register">
        {/* Left Div (Image) */}
        <div className="left-register">
          <div className="logo-div">
            <img src={Logo} className="sign-in-logo" />
          </div>
          <img src={User_Sign_In} className="welcome-photo" />
        </div>
        {/* Right Div (Form) */}
        <div className="right-register">
          {/* Sign in form */}
          <div>
            <h1>Sign In</h1>
            <label>Email</label>
            <br />
            <Textbox type="email" value={email} setValue={setEmail} />
            <br />
            <label>Password</label>
            <br />
            <Textbox type="password" value={password} setValue={setPassword} />
            <br />
            <Button btn_name="SignIn" btn_func={signIn} />
            <br />
            {/* Sign Up */}
            <p>
              Don't have an account? <Link to="/sign-up">SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
