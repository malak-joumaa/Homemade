import styled from "styled-components";

export const SearchBox = styled.input`
  height: 35px;
  width: 50%;
  margin: 0 auto;
  background-color: #f9f9f9;
  border: 1px solid #d2d2d2;
  border-radius: 20px;
  padding-left: 20px;
  font-size: 1.1em;
`;

export const LocationName = styled.div`
  height: 34px;
  width: 250px;
  float: right;
  border: 1px solid #43c187;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
  text-align: center;
  font-weight: 500;
  box-sizing: border-box;
  padding-top: 5px;
  position: relative;
  z-index: 5;
  background-color: ${(props) => (!props.color ? "white" : "#b1e4cd")};
`;

export const Loc = styled.i`
  margin-right: 10px;
`;

export const Title = styled.h2`
  font-size: 1.4em;
  margin-top: 50px;
`;

export const PhotoName = styled.div`
  display: flex;
`;
export const TopPhoto = styled.img`
  border-radius: 50%;
  width: 55px;
  height: 55px;
  margin-right: 20px;
`;
export const TopName = styled.h3`
  padding-top: -1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TopProfileLink = styled.a`
  text-decoration: underline;
  font-weight: bold;
  position: absolute;
  bottom: 30px;
`;

export const IconsBox = styled.div`
  display: flex;
  width: 170px;
  margin: 0 auto;
  text-align: center;
  margin-top: 25px;
`;
export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10%;
  display: flex;
  justify-content: center;
`;
export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin: auto;
`;

// New Cook

export const NewContainer = styled.div`
  width: 300px;
  height: 42px;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  display: flex;
`;

export const NewPhoto = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;
export const NewName = styled.h3`
  margin-top: 7px;
  white-space: nowrap;
  // overflow: hidden;
  text-overflow: ellipsis;
`;
