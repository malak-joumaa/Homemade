import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
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
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: white;
  padding: 14px 28px;
  border-radius: 3px;
  width: 420px;
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

export const Photo = styled.img`
  width: 220px;
  height: 130px;
  margin: 10px auto;
  border-radius: 10px;
  display: block;
`;

export const Question = styled.p`
  font-size: 17px;
  font-weight: 500;
  background-color: #c4e1d4;
  border-radius: 5px;
  width: 400px;
  box-sizing: border-box;
  padding: 10px 10px;
  color: #181818;
  margin-top: 10px;
  margin-bottom: 0px;
  opacity: 0.9;
`;
export const AnswerTxt = styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid #7e7d7d;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 17px 12px;
  font-size: 1.05em;
  margin-bottom: 10px;
`;
export const AnswerRadio = styled.input`
  width: 4%;
  height: 20px;
`;
export const AnswerCheck = styled.input`
  width: 4%;
  height: 18px;
  &:checked::after {
  }
`;
export const Choice = styled.span`
  position: relative;
  bottom: 1.5%;
  margin-right: 15px;
`;
export const Quantity = styled.span`
  font-size: 1.4em;
  margin: 0 20px;
`;
export const Total = styled.span`
  border-radius: 50px;
  padding: 4px 12px;
  background-color: #b2d5c6c2;
  color: #181818;
  font-size: 17px;
  display: inline-block;
`;
export const Cart = styled.button`
  border: 2px solid #7dc1a2;
  background-color: white;
  border-radius: 20px;
  padding: 5px 10px;
  font-family: "Quicksand", sans-serif;
  font-size: 1em;
`;
export const Add = styled.button`
  border: 1px solid #7dc1a2;
  border-radius: 50px;
  width: 25px;
  height: 25px;
  background-color: white;
  color: #7dc1a2;
`;
export const Close = styled.button`
  border: 1px solid #7dc1a2;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  background-color: white;
  color: #7dc1a2;
  float: right;
`;

export const QA = styled.div`
  height: 300px;
  overflow-y: scroll;
  margin-bottom: 10px;
`;

export const ModalLocDiv = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 2;
`;

export const ModalContentLoc = styled.div`
  position: absolute;
  top: 150px;
  right: 10px;
  line-height: 1.4;
  background: #b7b3b3;
  padding: 5px;
  border-radius: 3px;
`;
