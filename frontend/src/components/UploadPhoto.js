import React, { useState } from "react";

const UploadPhoto = ({ imgStore, page }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [fileName, setFileName] = useState("");

  return (
    <div className="file-upload">
      {/* If no image is selected, view upload photo box, else view selected image */}
      {!selectedImage ? (
        <div className="image-upload-wrap">
          <input
            className="file-upload-input"
            type="file"
            onChange={(e) => {
              setSelectedImage(e.target.files[0]);
              setFileName(e.target.files[0].name);
              var reader = new FileReader();
              reader.onload = function (event) {
                // Setting Image src
                setImageSrc(event.target.result);
                // Sending image to AddProfilePage
                imgStore(event.target.result);
              };
              reader.readAsDataURL(e.target.files[0]);
            }}
          />
          <h3>{page ? "CLICK OR DRAG AND DROP A FILE" : "UPLOAD PHOTO"}</h3>
        </div>
      ) : (
        <div className="file-upload-content">
          <img className="file-upload-image" src={imageSrc} alt="your image" />
          <div>
            <button
              className="remove-image-btn"
              onClick={() => {
                setSelectedImage(null);
                setImageSrc("");
                setFileName("");
                imgStore("");
              }}
            >
              <span>Remove</span>
              {fileName}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPhoto;
