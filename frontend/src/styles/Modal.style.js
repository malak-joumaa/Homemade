import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;

export const AddDish = styled.div`
  border: 1px solid #6a6a6a;
  border-radius: 8px;
  background-color: white;
  text-align: center;
  color: #6a6a6a;
  font-size: 17px;
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 4px;
`;
