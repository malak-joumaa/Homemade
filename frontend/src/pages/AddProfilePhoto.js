import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProfilePhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [fileName, setFileName] = useState("");

  return (
    <div>
      <div className="follow-up-div">
        <h1>Upload Profile Photo</h1>

        <div class="file-upload">
          {!selectedImage ? (
            <div class="image-upload-wrap">
              <input
                class="file-upload-input"
                type="file"
                onChange={(e) => {
                  setSelectedImage(e.target.files[0]);
                  setFileName(e.target.files[0].name);
                  var reader = new FileReader();
                  reader.onload = function (event) {
                    setImageSrc(event.target.result);
                    console.log(e.target.files[0]);
                    console.log(event.target);
                    console.log(event.target.result);
                    console.log(imageSrc);
                  };
                  reader.readAsDataURL(e.target.files[0]);
                }}
                accept="image/*"
              />
              <h3>CLICK OR DRAG AND DROP A FILE</h3>
            </div>
          ) : (
            <></>
          )}
        </div>

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
