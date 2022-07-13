import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <>
      <h1>Choose Preffered Categories</h1>
      {/* Main Content */}
      <Category name="Fast Food" />
      <Category name="Breakfast" />
    </>
  );
};

export default Categories;
