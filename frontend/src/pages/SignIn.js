import React, { useState } from "react";
import { Link } from "react-router-dom";
import User_Sign_In from "../assets/chef.jpg";
import Logo from "../assets/logo.png";

const SignIn = () => {
  // Email and password use state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);

  return (
    <div className="main-container">
      <div className="register">
        <div className="left-register">
          <div className="logo-div">
            <img src={Logo} className="register-logo" />
          </div>
          <img src={User_Sign_In} className="welcome-photo" />
        </div>
        <div className="right-register">
          {/* Sign in form */}
          <div>
            <h1>Sign In</h1>
            <label>Email</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button>Sign In</button>
            <br />
            {/* Sign Up */}
            <p>Don't have an account? {/*<Link>SignUp</Link> */}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
