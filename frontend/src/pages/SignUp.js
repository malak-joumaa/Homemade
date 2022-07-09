import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const SignUp = () => {
  var navigate = useNavigate();
  // Use states
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setCpassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const signUp = async () => {
    const res = await fetch("http://localhost:5000/api/user/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: fname,
        last_name: lname,
        email: email,
        password: password,
        user_type: "customer",
      }),
    });
    const data = await res.json();
    console.log(data);
    navigate("/profile-photo");
  };

  return (
    <div className="main-container">
      <div className="register sign-up">
        {/* Sign up form */}
        <div id="form">
          {/* Logo */}
          <div className="sign-up-logo-div">
            <img src={Logo} className="sign-up-logo" />
          </div>
          <h1>Sign Up</h1>
          <div className="left-register left-sign-up">
            <label>First Name</label>
            <br />
            <input
              type="text"
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <br />
            <label>Last Name</label>
            <br />
            <input
              type="text"
              id="lname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="right-register">
            <label>Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label>Confirm Password</label>
            <br />
            <input
              type="password"
              id="c_password"
              value={c_password}
              onChange={(e) => setCpassword(e.target.value)}
            />
            <br />
            <label>Phone number</label>
            <br />
            <input
              type="text"
              id="phone_number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <br />
          <button
            onClick={() => {
              signUp();
            }}
          >
            Sign Up
          </button>
          <br />
          {/* Sign In */}
          <p>
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
