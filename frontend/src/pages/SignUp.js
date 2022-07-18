import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import toast from "react-hot-toast";
import Textbox from "../components/Textbox";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const SignUp = () => {
  var navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { changeValue } = bindActionCreators(actionCreators, dispatch);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setCpassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const followUp = async () => {
    changeValue({
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    });
    console.log(user);
    navigate("/follow-up");
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
          <button
            onKeyDown={(e) => {
              e.preventDefault();
            }}
            onClick={(e) => {
              e.preventDefault();
              if (
                fname == "" ||
                lname == "" ||
                email == "" ||
                password == "" ||
                c_password == "" ||
                phoneNumber == ""
              ) {
                console.log("here");
                toast.error("Please fill all feilds");
              } else if (password != c_password) {
                toast.error("Password and Confirm Password do not match");
              } else {
                console.log("followup");
                followUp();
              }
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
