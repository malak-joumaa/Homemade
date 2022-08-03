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

export const Table = styled.table`
  width: 100%;
  min-height: 100px;
  max-height: 520px;
  overflow-y: scroll;
  border-radius: 10px;
  display: block;
`;

export const Thead = styled.table`
  display: table;
  width: 100%;
  border: 1px solid #e1e0e0;
  position: sticky;
  top: 0;
  background-color: white;
`;

export const Tbody = styled.table`
  display: table;
  width: 100%;
  border: 1px solid #e1e0e0;
`;

export const TableRow = styled.tr`
  background-color: ${(props) => (props.status === "ready" ? "#cbedde" : "")};
  background-color: ${(props) =>
    props.status === "delivered" ? "#d7d7d7" : ""};
`;

export const IconTd = styled.td`
  font-size: 1.7em;
`;

export const Select = styled.select`
  font-size: 1em;
  padding: 3px;
  border-radius: 15px;
  margin-right: 3px;
  border: 1px solid #a3a3a3;
`;

export const Confirm = styled.span`
  cursor: pointer;
  font-size: 0.95em;
  font-weight: 500;
  border: none;
  padding: 2px 12px;
  border-radius: 15px;
  background-color: #a3a3a3;
  color: white;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #767373;
  }
`;

export const NewMenuBtn = styled.button`
  cursor: pointer;
  padding: 8px 30px;
  font-size: 1.25em;
  color: white;
  background-color: #6ac79cdb;
  border: none;
  border-radius: 10px;
  margin-top: 50px;
  display: block;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  &:active,
  &:hover {
    transform: translateY(2px);
  }
`;
