import React, { useState } from "react";
import Specifications from "../components/Specifications";
import "../styles/menu.css";
import Button from "../components/Button";
import UploadPhoto from "../components/UploadPhoto";

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

  const [profilePhoto, setProfilePhoto] = useState("photo");

  // Function to get profile photo source from UploadPhoto component
  const useImageSource = (image) => {
    setProfilePhoto(image);
  };

  const handleFormChange = (index, event) => {
    let data = [...dish];
    data[index][event.target.name] = event.target.value;
    setDish(data);
  };
  console.log(dish);
  console.log(profilePhoto);

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
                <br />
                <label>Add photo:</label>

                <UploadPhoto imgStore={useImageSource} />

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
          <Button btn_name="+" btn_func={addDish} />
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
