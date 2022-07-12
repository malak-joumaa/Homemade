import React from "react";

const Button = ({ btn_name, btn_func }) => {
  return <button onClick={btn_func}>{btn_name}</button>;
};

export default Button;
