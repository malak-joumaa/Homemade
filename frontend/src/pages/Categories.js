import React from "react";
import { Link } from "react-router-dom";
import Category from "../components/Category";

const Caregories = () => {
  return (
    <div>
      <div className="follow-up-div">
        {/* Title */}
        <h1>Choose Preffered Categories</h1>
        {/* Main Content */}
        <Category name="Fast Food" />
        <Category name="Breakfast" />
        {/* Links */}
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

export default Caregories;
