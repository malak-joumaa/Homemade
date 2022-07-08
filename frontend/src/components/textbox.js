import React from "react";

const Textbox = (txt_class, txt_id = "", txt_state, txt_setState) => {
  return (
    <input
      id={txt_id}
      className={txt_class}
      value={txt_state}
      onChange={(e) => txt_setState(e.target.value)}
    />
  );
};

export default Textbox;
