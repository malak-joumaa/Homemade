import React, { useState } from "react";
import UploadPhoto from "./UploadPhoto";

const AddProfilePhoto = () => {
  const [profilePhoto, setProfilePhoto] = useState("photo");

  // Function to get profile photo source from UploadPhoto component
  const useImageSource = (image) => {
    setProfilePhoto(image);
  };
  console.log(profilePhoto);

  return (
    <>
      <h1>Upload Profile Photo</h1>
      {/* Upload Image */}
      <UploadPhoto imgStore={useImageSource} page="pp" />
    </>
  );
};

export default AddProfilePhoto;
