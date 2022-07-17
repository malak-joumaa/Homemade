import styled from "styled-components";
import green_bg from "../assets/green-bk.png";

export const Nav = styled.div`
  height: 50px;
  width: 1300px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const Nav_Logo_Div = styled.div`
  float: left;
`;

export const Nav_ul = styled.div`
  height: 50px;
  display: flex;
  list-style: none;
  float: right;
`;

export const Main_Page_Container = styled.div`
  width: 1300px;
  margin: 0 auto;
`;

export const Search_Location = styled.div`
  margin-top: 25px;
`;

export const Display_Cook_Info = styled.div`
  width: 1300px;
  height: 400px;
  margin: 30px auto;
  background-image: url(${green_bg});
  border-radius: 20px;
`;
