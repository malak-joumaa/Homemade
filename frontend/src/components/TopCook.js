import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TopContainer,
  TopPhoto,
  TopName,
  TopProfileLink,
  PhotoName,
  IconsBox,
  Icon,
  IconWrapper,
} from "../styles/MainPage.style";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";

const TopCook = ({ id, photo, fname, lname, count }) => {
  const navigate = useNavigate();
  return (
    <div
      className={"top_cook top" + count}
      onClick={() => {
        localStorage.setItem("cook_id", id);
        navigate("/cook");
      }}
    >
      <PhotoName>
        <TopPhoto src={photo}></TopPhoto>
        <TopName>
          {fname} {lname}
        </TopName>
      </PhotoName>
      <IconsBox>
        <IconWrapper className={"icon" + count}>
          <Icon src={Icon1}></Icon>
        </IconWrapper>
        <IconWrapper className={"icon" + count}>
          <Icon src={Icon2}></Icon>
        </IconWrapper>
        <IconWrapper className={"icon" + count}>
          <Icon src={Icon3}></Icon>
        </IconWrapper>
      </IconsBox>
      <br />
      <TopProfileLink>Check Profile -{">"}</TopProfileLink>
    </div>
  );
};

export default TopCook;
