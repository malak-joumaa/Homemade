import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProfilePhoto from "../components/AddProfilePhoto";
import ChooseLocation from "../components/ChooseLocation";
import OpeningHours from "../components/OpeningHours";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const RegisterFollowUp = () => {
  const navigate = useNavigate();
  // Getting data from sign up page
  const user = useSelector((state) => state.user);

  // Setting state variable to keep track of the components being displayed
  const [stateNb, setStateNb] = useState(1);

  var user_type = localStorage.getItem("user_type");

  // Array to store the data from follow-up components
  const [data, setData] = useState([
    { profilePhoto: "" },
    { location: {} },
    { openingHours: { from: "", till: "" } },
    { description: "" },
  ]);

  // Add Data to User
  const addData = async () => {
    // Sign Up User with data from sign up page
    try {
      const res = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          first_name: user.fname,
          last_name: user.lname,
          email: user.email,
          password: user.password,
          user_type: localStorage.getItem("user_type"),
          profile_photo: data[0].profilePhoto.image,
          location: data[1].location,
        }),
      });
      const data2 = await res.json();

      //Create cook or customer profile with data from follow up

      // Cook
      if (user_type === "cook") {
        try {
          const res = await fetch("http://localhost:5000/api/user/add-cook", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              user: data2.user,
              opening_hours: [
                data[2].openingHours.from,
                data[2].openingHours.till,
              ],
              description: data[3].description,
              rate: 5,
              submitted_orders: [],
              firebase_token: "",
            }),
          });
          const resData = await res.json();
          navigate("/sign-in");
        } catch (error) {
          toast.error("Sign up failed");
        }
        // Customer
      } else if (user_type === "customer") {
        try {
          const res = await fetch(
            "http://localhost:5000/api/user/add-customer",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                user: data2.user,
                submitted_orders: [],
              }),
            }
          );
          const resData = await res.json();
          navigate("/sign-in");
        } catch (error) {
          toast.error("Sign up failed, try again");
        }
      }
    } catch (err) {
      toast.error("Sign up failed, make sure image size is not too big");
    }
  };

  return (
    <div>
      <div className="follow-up-div">
        {/*Calling Components */}

        {stateNb == 1 && <AddProfilePhoto data={data} setData={setData} />}

        {stateNb == 2 && <ChooseLocation data={data} setData={setData} />}

        {stateNb == 3 && user_type == "cook" && (
          <OpeningHours data={data} setData={setData} />
        )}

        {/* Links to Skip or move to the next page */}
        {stateNb == 1 ? (
          <span className="skip" onClick={() => setStateNb(stateNb + 1)}>
            Skip
          </span>
        ) : (
          <span className="skip" onClick={() => setStateNb(stateNb - 1)}>
            Back
          </span>
        )}

        <span
          className="next"
          onClick={() => {
            if (stateNb == 2 && user_type == "customer") {
              addData();
            }
            if (stateNb == 3 && user_type == "cook") {
              addData();
            } else {
              setStateNb(stateNb + 1);
            }
          }}
        >
          Next -{">"}
        </span>
      </div>
    </div>
  );
};

export default RegisterFollowUp;
