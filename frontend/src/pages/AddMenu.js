import React, { useState } from "react";
import Specifications from "../components/Specifications";
import "../styles/menu.css";

const AddMenu = () => {
  const [dish, setDish] = useState([
    {
      name: "",
      description: "",
      price: "",
      quantity: "",
      photo: "",
      categories: [],
    },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFormChange = (index, event) => {
    let data = [...dish];
    data[index][event.target.name] = event.target.value;
    setDish(data);
  };
  console.log(dish);

  //Add a new item
  const addDish = () => {
    let newDish = {
      name: "",
      description: "",
      price: "",
      quantity: "",
      photo: "",
      categories: [],
    };
    setDish([...dish, newDish]);
  };

  return (
    <div id="menu">
      <div id="add-menu">
        <form>
          {/* Adding a menu item(dish) */}
          {dish.map((input, index) => (
            <div key={index} id="dish">
              <div>
                <h3>Item Name:</h3>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
                <br />
                <label>Add photo:</label>
                {/* ************** */}
                <div class="upload">
                  {!selectedImage ? (
                    <div class="image-upload">
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
                      <h3>Upload Here</h3>
                    </div>
                  ) : (
                    <div class="upload-content">
                      <img
                        class="upload-image"
                        src={imageSrc}
                        alt="your image"
                      />
                      <div>
                        <button
                          onClick={() => {
                            setSelectedImage(null);
                            setImageSrc("");
                            setFileName("");
                          }}
                          class="remove-btn"
                        >
                          Remove {fileName}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* ************************* */}
                <br />
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
                <br />
                <label>Price:</label>
                <input
                  type="text"
                  name="price"
                  value={input.price}
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
                <br />
                <label>Quantity:</label>
                <input type="text" />
                <br />
                <label>Category:</label>
                <input type="text" />
              </div>
              <div>
                <h3>Specifications</h3>
                <Specifications />
              </div>
            </div>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              addDish();
            }}
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
