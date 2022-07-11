import React, { useState } from "react";

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
    <div>
      <div id="add-menu">
        <form>
          {/* Adding a menu item(dish) */}
          {dish.map((input, index) => (
            <div key={index}>
              <h3>Item Name:</h3>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => {
                  handleFormChange(index, e);
                }}
              />
              <p>Add photo</p>
              <input type="file" />
              <p>Description</p>
              <input
                type="text"
                name="description"
                value={input.description}
                onChange={(e) => {
                  handleFormChange(index, e);
                }}
              />
              <p>Price</p>
              <input
                type="text"
                name="price"
                value={input.price}
                onChange={(e) => {
                  handleFormChange(index, e);
                }}
              />
              <p>Quantity</p>
              <input type="text" />
              <p>Category</p>
              <input type="text" />

              <h3>Special Instructions</h3>
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
