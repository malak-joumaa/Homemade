import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProfilePhoto = () => {
  return (
    <div>
      <div className="follow-up-div">
        <h2>Upload Profile Photo</h2>
        <input type="file" />
        <div id="uploaded-profile-photo"></div>
        {/* Link to be changed */}
        <Link to="/sign-in">Skip</Link>
        <Link to="/sign-in">Next -{">"}</Link>
      </div>
    </div>
  );
};

export default AddProfilePhoto;
