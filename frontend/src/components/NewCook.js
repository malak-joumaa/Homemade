import React from "react";
import { NewContainer, NewPhoto, NewName } from "../styles/MainPage.style";
import { useNavigate } from "react-router-dom";

const NewCook = ({ id, photo, fname, lname, count }) => {
  const navigate = useNavigate();
  return (
    <div
      class={"new_container new" + count}
      onClick={() => {
        localStorage.setItem("cook_id", id);
        navigate("/cook");
      }}
    >
      <NewPhoto src={photo} />
      <NewName>
        {fname} {lname}
      </NewName>
    </div>
  );
};

export default NewCook;
