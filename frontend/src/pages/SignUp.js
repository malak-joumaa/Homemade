import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Button from "../components/Button";
import Textbox from "../components/Textbox";

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
            <Textbox value={fname} setValue={setFname} />
            <br />
            <label>Last Name</label>
            <br />
            <Textbox value={lname} setValue={setLname} />
            <br />
            <label>Email</label>
            <br />
            <Textbox type="email" value={email} setValue={setEmail} />
          </div>
          <div className="right-register">
            <label>Password</label>
            <br />
            <Textbox type="password" value={password} setValue={setPassword} />
            <br />
            <label>Confirm Password</label>
            <br />
            <Textbox
              type="password"
              value={c_password}
              setValue={setCpassword}
            />
            <br />
            <label>Phone number</label>
            <br />
            <Textbox value={phoneNumber} setValue={setPhoneNumber} />
          </div>
          <br />
          <Button btn_name="Sign Up" btn_func={signUp} />
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
