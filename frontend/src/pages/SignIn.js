import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div id="register">
      <div id="left-register"></div>
      <div id="right-register">
        <from>
          <h1>Sign In</h1>
          <label>Email</label>
          <br />
          <input type="email" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" />
          <br />
          <button>Sign In</button>
          <br />
          <p>Don't have an account? {/*<Link>SignUp</Link> */}</p>
        </from>
      </div>
    </div>
  );
};

export default SignIn;
