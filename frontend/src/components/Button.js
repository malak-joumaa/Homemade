import React from "react";

const Button = ({ btn_name, btn_func }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        btn_func();
      }}
    >
      {btn_name}
    </button>
  );
};

export default Button;
