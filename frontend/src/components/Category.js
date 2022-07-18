import React, { useState } from "react";

const Category = ({ name, id, handleClick }) => {
  return (
    <div
      className="category"
      onClick={(event) => {
        handleClick(event, id);
      }}
    >
      {name}{" "}
    </div>
  );
};

export default Category;
