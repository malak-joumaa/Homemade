import React from "react";
import { NewContainer, NewPhoto, NewName } from "../styles/MainPage.style";

const NewCook = ({ id, photo, fname, lname }) => {
  return (
    <NewContainer>
      <NewPhoto src={photo} />
      <NewName>
        {fname} {lname}
      </NewName>
    </NewContainer>
  );
};

export default NewCook;
