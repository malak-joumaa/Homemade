import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProfilePhoto from "../components/AddProfilePhoto";
import Categories from "../components/Categories";
import OpeningHours from "../components/OpeningHours";

const RegisterFollowUp = () => {
  const [stateNb, setStateNb] = useState(3);
  const [data, setData] = useState([
    { profilePhoto: "" },
    { location: [] },
    { openingHours: [] },
    { categories: [] },
  ]);

  var user_type = localStorage.getItem("user_type");

  return (
    <div>
      <div className="follow-up-div">
        {/*Calling Components */}

        {stateNb == 1 && (
          <AddProfilePhoto state={setStateNb} setData={setData} />
        )}

        {/* {stateNb == 2 && (
          <AddProfilePhoto state={setStateNb} setData={setData} />
        )} */}

        {stateNb == 3 &&
          (user_type == "cook" ? (
            <OpeningHours state={setStateNb} setData={setData} />
          ) : (
            <Categories state={setStateNb} setData={setData} />
          ))}

        {/* Links to Skip or move to the next page */}
        <Link to="/opening-hours" className="skip">
          Skip
        </Link>
        <Link to="/opening-hours" className="next">
          Next -{">"}
        </Link>
      </div>
    </div>
  );
};

export default RegisterFollowUp;
