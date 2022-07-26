import styled from "styled-components";

export const ProfileInfo = styled.div`
  margin-top: 70px;
  min-height: 210px;
`;

export const Hat = styled.img`
  width: 100px;
  transform: rotate(-0.04turn);
  position: absolute;
  top: 65px;
`;

export const ProfilePhoto = styled.img`
  width: 180px;
  border: 2px solid #43c187;
  border-radius: 50%;
  margin-left: 10px;
  position: relative;
`;

export const Name = styled.p`
  color: #494949;
  font-size: 1.4em;
`;
export const Description = styled.p`
  color: #606060;
  font-size: 1.1em;
  text-align: justify;
`;

export const Rate = styled.div`
  text-align: center;
  margin-top: 70px;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 220px;
  height: 50px;
  font-size: 1.2em;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  border: 1px solid #e1e0e0;
  border-radius: 15px;
  color: #847e7c;
  background-color: white;
  &:hover,
  :active {
    color: white;
    background-color: #43c187;
  }
`;
