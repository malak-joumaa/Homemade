import styled from "styled-components";

export const Nav = styled.div`
  margin-top: 30px;
  display: flex;
`;

export const NavItem = styled.div`
  cursor: pointer;
  border: 1px solid #79c3a1;
  border-radius: 10px;
  padding: 2px 11px;
  margin-right: 20px;
  font-size: 1.2em;
  font-weight: 600;
  &:hover {
    background-color: #acdac5;
  }
`;

export const CartOrder = styled.div`
  margin-top: 40px;
  display: flex;
  height: 80px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

export const CookInfo = styled.div`
  margin-top: 5px;
`;

export const Photo = styled.img`
  height: 80px;
  width: 80px;
  border: 1px solid #79c3a1;
  border-radius: 5px;
`;

export const CookName = styled.span`
  font-weight: 600;
`;

export const Answer = styled.span`
  color: #43c187;
`;

export const Info = styled.span`
  line-height: 80px;
`;

export const Delete = styled.span`
  line-height: 80px;
  font-size: 1.2em;
`;
