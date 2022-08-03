import styled from "styled-components";

export const Nav = styled.div`
  height: 50px;s
  margin: 0 auto;
  margin-top: 20px;
`;

export const NavLogoDiv = styled.div`
  float: left;
`;

export const NavUl = styled.div`
  height: 50px;
  display: flex;
  list-style: none;
  float: right;
`;

export const MainPageContainer = styled.div`
  margin: 0 auto;
`;

export const SearchLocation = styled.div`
  margin-top: 25px;
`;

export const CookDescription = styled.div`
  width: 86%;
  margin: 0 auto;
  box-size: border-box;
  padding-right: 30px;
`;

export const Description = styled.textarea`
  height: 150px;
  width: 100%;
  background-color: #d3f2e3;
  padding: 15px;
  border: none;
  border-radius: 20px;
  resize: none;
  margin-top: 15px;
  font-size: 1.2em;
  font-family: "Quicksand", sans-serif;
  &:focus {
    outline: none;
  }
`;

export const PhotoName = styled.div`
  display: flex;
  text-align: center;
  position: relative;
  display: inline-block;
`;

export const Name = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  color: #45a479;
`;
