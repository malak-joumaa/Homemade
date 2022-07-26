import React from "react";
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

const TopCook = ({ id, photo, fname, lname }) => {
  return (
    <TopContainer>
      <PhotoName>
        <TopPhoto src={photo}></TopPhoto>
        <TopName>
          {fname} {lname}
        </TopName>
      </PhotoName>
      <IconsBox>
        <IconWrapper>
          <Icon src={Icon1}></Icon>
        </IconWrapper>
        <IconWrapper>
          <Icon src={Icon2}></Icon>
        </IconWrapper>
        <IconWrapper>
          <Icon src={Icon3}></Icon>
        </IconWrapper>
      </IconsBox>
      <br />
      <TopProfileLink>Check Profile -{">"}</TopProfileLink>
    </TopContainer>
  );
};

export default TopCook;
