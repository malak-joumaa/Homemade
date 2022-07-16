import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import User_Sign_In from "../assets/chef.jpg";
import Logo from "../assets/logo.png";
import jwt_decode from "jwt-decode";
import Textbox from "../components/Textbox";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const SignIn = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const { addUserData } = bindActionCreators(actionCreators, dispatch);

  console.log(userData);

  // Email and password use state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login api
  const signIn = async () => {
    try {
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
      window.localStorage.setItem("user_type", decoded.user_type);
      addUserData({
        fname: decoded.first_name,
        lname: decoded.first_name,
        email: decoded.email,
        phone_number: decoded.phone_number,
        location: decoded.location,
        profile_photo: decoded.profile_photo,
      });
      window.localStorage.setItem("userData", userData);
      if (decoded.user_type == "customer") {
        navigate("/main-page");
      } else navigate("/add-menu");
    } catch (error) {
      toast.error("Incorrect username or password");
    }
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
            <button
              onClick={(e) => {
                e.preventDefault();
                if (email == "" || password == "") {
                  console.log("here");
                  toast.error("Please fill all feilds");
                } else {
                  signIn();
                }
              }}
            >
              Sign In
            </button>
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
