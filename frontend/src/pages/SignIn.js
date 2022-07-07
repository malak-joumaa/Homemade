import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);

  return (
    <div id="register">
      <div id="left-register"></div>
      <div id="right-register">
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
          <p>Don't have an account? {/*<Link>SignUp</Link> */}</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
