import React, { useState } from "react";
import Specifications from "../components/Specifications";
import "../styles/menu.css";
import Button from "../components/Button";
import UploadPhoto from "../components/UploadPhoto";
import { useNavigate } from "react-router-dom";

const AddMenu = () => {
  const navigate = useNavigate();
  // Dish useState
  const [dish, setDish] = useState([
    {
      name: "",
      description: "",
      price: "",
      quantity: "",
      photo: "",
    },
  ]);

  // Question useState
  const [question, setQuestion] = useState([
    [
      {
        question: "Special Instructions",
        type: "textBox",
        choices: [],
        currentChoice: "",
      },
    ],
  ]);

  //Handle Dish Form Change
  const handleFormChange = (index, event) => {
    let data = [...dish];
    data[index][event.target.name] = event.target.value;
    setDish(data);
  };
  // Handle Image Upload
  const handleImageChange = (index, event) => {
    let data = [...dish];
    data[index].photo = event.target.result;
    setDish(data);
  };
  console.log(dish);
  console.log(question);

  //Add a new Dish
  const addDish = () => {
    let newDish = {
      name: "",
      description: "",
      price: "",
      quantity: "",
      photo: "",
    };
    setDish([...dish, newDish]);
    setQuestion([...question, []]);
  };
  // Delete Menu
  const deleteMenu = async (menu_id) => {
    const res = await fetch(
      "http://localhost:5000/api/menu/delete-menu/?id=" + menu_id,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  const submitMenu = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/menu/add-menu", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          cook: localStorage.getItem("cook_id"),
        }),
      });
      const data = await res.json();
      const menuId = data._id;
      console.log(data);
      var count = -1;
      dish.forEach(async (singleDish) => {
        count++;
        const res2 = await fetch("http://localhost:5000/api/menu/add-dish", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: singleDish.name,
            description: singleDish.description,
            price: singleDish.price,
            photo: singleDish.photo,
            quantity: singleDish.quantity,
            menu: menuId,
            questions: question[count],
          }),
        });
        const data2 = await res2.json();
        navigate("/cook-profile");
      });
    } catch (err) {
      console.log(err);
    }
  };
  const imgStore = (image) => {
    console.log(image);
  };
  return (
    <div id="menu">
      <div id="add-menu">
        <form id="add-menu-form">
          <h1>
            <u>Add Menu</u>
          </h1>
          {/* Adding a menu item(dish) */}
          {dish.map((input, index) => (
            <div key={index} id="dish">
              <div>
                <h3>Item:</h3>
                <br />
                <label>Add photo:</label>

                <UploadPhoto
                  handleImage={handleImageChange}
                  index={index}
                  imgStore={imgStore}
                />

                <br />
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
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
                <input
                  type="text"
                  name="quantity"
                  value={input.quantity}
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
              </div>
              <div>
                <h3>Specifications</h3>
                <Specifications
                  question={question}
                  setQuestion={setQuestion}
                  dishIndex={index}
                />
              </div>
            </div>
          ))}
          <Button btn_name="+" btn_func={addDish} />
          <br />
          <button
            id="submit-menu"
            onClick={(e) => {
              e.preventDefault();
              deleteMenu(localStorage.getItem("menu_id"));
              submitMenu();
            }}
          >
            Submit Menu
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
