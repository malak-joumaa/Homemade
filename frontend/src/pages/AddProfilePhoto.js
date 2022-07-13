import React, { useState } from "react";
import { Link } from "react-router-dom";
import UploadPhoto from "../components/UploadPhoto";

const AddProfilePhoto = () => {
  const [profilePhoto, setProfilePhoto] = useState("photo");

  // Function to get profile photo source from UploadPhoto component
  const useImageSource = (image) => {
    setProfilePhoto(image);
  };
  console.log(profilePhoto);

  return (
    <div>
      <div className="follow-up-div">
        <h1>Upload Profile Photo</h1>

        {/* Upload Image */}
        <UploadPhoto imgStore={useImageSource} page="pp" />

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

export default AddProfilePhoto;
