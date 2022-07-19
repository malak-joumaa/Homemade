import styled from "styled-components";

export const MenuContainer = styled.div`
  border: 2px solid #79c3a1;
  border-radius: 20px;
  min-height: 160px;
  margin-top: 30px;
  box-sizing: border-box;
  padding: 30px;
`;

export const DishImg = styled.img`
  width: 120px;
  height: 120px;
  border: 2px solid #79c3a1;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const DishName = styled.span`
  font-weight: 600;
  font-size: 1.15em;
`;

export const DishPrice = styled.span`
  font-weight: 600;
  font-size: 1.15em;
`;

export const DishDescription = styled.span`
  font-size: 14px;
`;
