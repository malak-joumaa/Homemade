import React, { useState } from "react";

const Category = ({ name, id }) => {
  const [clicked, setClicked] = useState([]);

  console.log(clicked);
  console.log(id);

  return (
    <div
      className={
        clicked.includes(id) ? "category clicked_category" : "category"
      }
      onClick={() => {
        clicked.includes(id)
          ? setClicked(clicked.filter(clicked != { id }))
          : setClicked([...clicked, id]);
      }}
    >
      {name}{" "}
    </div>
  );
};

export default Category;
