import React, { useState, useEffect } from "react";
import Category from "./Category";

const Categories = ({ setData, data }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  // Get Categories
  const getCategories = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/cook/auth/get-category/?type=admin"
      );
      const data = await res.json();
      console.log(data);
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(categories);

  return (
    <>
      <h1>Choose Preffered Categories</h1>
      {/* Main Content */}
      <div id="category-div">
        {categories.map((singleCat, index) => (
          <Category
            key={index}
            id={categories[index]._id}
            name={categories[index].name}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
