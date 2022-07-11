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
                <span>Add photo:</span>
                <input type="file" />
                <br />
                <span>Description:</span>
                <input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
                <br />
                <span>Price:</span>
                <input
                  type="text"
                  name="price"
                  value={input.price}
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
                <br />
                <span>Quantity:</span>
                <input type="text" />
                <br />
                <span>Category:</span>
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
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
