import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProfilePhoto = () => {
  return (
    <div>
      <div className="follow-up-div">
        <h1>Upload Profile Photo</h1>
        <input type="file" />
        <div id="uploaded-profile-photo"></div>
        {/* Link to be changed */}
        <Link to="/sign-in" className="skip">
          Skip
        </Link>
        <Link to="/sign-in" className="next">
          Next -{">"}
        </Link>
      </div>
    </div>
  );
};

export default AddProfilePhoto;
