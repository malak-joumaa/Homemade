import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProfilePhoto from "../components/AddProfilePhoto";
import Categories from "../components/Categories";
import ChooseLocation from "../components/ChooseLocation";
import OpeningHours from "../components/OpeningHours";

const RegisterFollowUp = () => {
  const navigate = useNavigate();
  const [stateNb, setStateNb] = useState(1);
  const [data, setData] = useState([
    { profilePhoto: "" },
    { location: [] },
    { openingHours: { from: "", till: "" } },
    { categories: [] },
  ]);

  var user_type = localStorage.getItem("user_type");
  console.log(stateNb);
  console.log(data);

  const addData = async () => {
    if (user_type == "cook") {
      try {
        const res = await fetch(
          "http://localhost:5000/api/user/auth/add-cook",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              user: localStorage.getItem("user_id"),
              opening_hours: [
                data[2].openingHours.from,
                data[2].openingHours.till,
              ],
              rate: 5,
            }),
          }
        );
        const resData = await res.json();
        console.log(resData);
      } catch (error) {
        console.log("Failed");
      }
    } else if (user_type == "customer") {
      try {
        const res = await fetch(
          "http://localhost:5000/api/user/auth/add-customer",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              user: localStorage.getItem("user_id"),
              categories: data.categories,
            }),
          }
        );
        const resData = await res.json();
        console.log(resData);
      } catch (error) {
        console.log("Failed");
      }
    }
  };

  return (
    <div>
      <div className="follow-up-div">
        {/*Calling Components */}

        {stateNb == 1 && <AddProfilePhoto data={data} setData={setData} />}

        {stateNb == 2 && <ChooseLocation setData={setData} />}

        {stateNb == 3 &&
          (user_type == "cook" ? (
            <OpeningHours data={data} setData={setData} />
          ) : (
            <Categories data={data} setData={setData} />
          ))}

        {stateNb == 4 && navigate("/sign-in")}

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
            if (stateNb == 3) {
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
