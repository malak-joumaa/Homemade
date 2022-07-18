import React, { useState, useEffect } from "react";
import Category from "./Category";

const Categories = ({ setData, data }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const [clicked, setClicked] = useState([]);

  console.log(clicked);

  const handleClick = (event, id) => {
    // Adding class to the clicked category
    event.currentTarget.classList.toggle("clicked_category");
    console.log(clicked.includes(id));
    // Adding the clicked category to the array
    clicked.includes(id)
      ? setClicked(clicked.filter((item) => item !== id))
      : setClicked([...clicked, id]);
    data[4].categories = [...clicked, id];
    setData(data);
    console.log(data);
  };

  // Get Categories
  const getCategories = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/cook/get-category/?type=admin"
      );
      const data = await res.json();
      console.log(data);
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Choose Preferred Categories</h1>
      {/* Main Content */}
      <div id="category-div">
        {categories.map((singleCat, index) => (
          <Category
            key={index}
            id={categories[index]._id}
            name={categories[index].name}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
