import React from "react";

const Textbox = ({
  type = "text",
  value,
  name_value = "",
  setValue,
  class_name = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name_value}
      className={class_name}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
};

export default Textbox;
