import React from "react";

const Textbox = (type = "text", value, name_value = "", func, class_name) => {
  return (
    <input
      type={type}
      value={value}
      name={name_value}
      className={class_name}
      onChange={(e) => {
        func;
      }}
    >
      Textbox
    </input>
  );
};

export default Textbox;
