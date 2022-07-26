import React from "react";
import { NewContainer, NewPhoto, NewName } from "../styles/MainPage.style";

const NewCook = ({ id, photo, fname, lname, count }) => {
  return (
    <div class={"new_container new" + count}>
      <NewPhoto src={photo} />
      <NewName>
        {fname} {lname}
      </NewName>
    </div>
  );
};

export default NewCook;
