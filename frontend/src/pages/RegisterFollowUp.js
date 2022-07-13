import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProfilePhoto from "../components/AddProfilePhoto";
import Categories from "../components/Categories";
import OpeningHours from "../components/OpeningHours";

const RegisterFollowUp = () => {
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

  return (
    <div>
      <div className="follow-up-div">
        {/*Calling Components */}

        {stateNb == 1 && <AddProfilePhoto data={data} setData={setData} />}

        {/* {stateNb == 2 && (
          <ChooseLocation setData={setData} />
        )} */}

        {stateNb == 3 &&
          (user_type == "cook" ? (
            <OpeningHours data={data} setData={setData} />
          ) : (
            <Categories data={data} setData={setData} />
          ))}

        {/* Links to Skip or move to the next page */}
        <span className="skip" onClick={() => setStateNb(stateNb + 2)}>
          Skip
        </span>
        <span className="next" onClick={() => setStateNb(stateNb + 2)}>
          Next -{">"}
        </span>
      </div>
    </div>
  );
};

export default RegisterFollowUp;
