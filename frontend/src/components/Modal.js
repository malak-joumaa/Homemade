import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import {
  ModalDiv,
  Overlay,
  ModalContent,
  AddDish,
  Photo,
  Question,
  AnswerTxt,
  AnswerRadio,
  AnswerCheck,
  AnswerSelect,
  Quantity,
  Total,
  Cart,
  Add,
  Close,
  QA,
} from "../styles/Modal.style";
import { DishName, DishDescription, DishPrice } from "../styles/Menu.style";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  //   Counter for quantity
  const [count, setCount] = useState(1);
  const handleAdd = () => setCount(count + 1);
  const handleSub = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <>
      <AddDish onClick={toggleModal}>
        <i class="fa-solid fa-plus"></i>
      </AddDish>
      {modal && (
        <ModalDiv>
          <Overlay>
            <ModalContent>
              <Close onClick={toggleModal}>
                {" "}
                <i class="fa-solid fa-x"></i>
              </Close>
              <br />
              <Photo />
              <br />
              <DishName>Mloukhiye </DishName>
              <br />
              <DishPrice>10$</DishPrice>
              <br />
              <DishDescription>Lorem Ipsum idk.... </DishDescription>
              <br />
              <QA>
                {/* Map */}
                <Question>This is a dummy question</Question>
                <br />
                <AnswerTxt type="text"></AnswerTxt>
                <br />
                <Question>This is a dummy question</Question>
                <br />
                <AnswerRadio type="radio"></AnswerRadio>
                <br />
                <Question>This is a dummy question</Question>
                <br />
                <AnswerCheck type="checkbox"></AnswerCheck>
                <br />
                <Question>This is a dummy question</Question>
                <br />
                <AnswerSelect></AnswerSelect>
                <br />
              </QA>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Add
                    onClick={() => {
                      handleAdd();
                    }}
                  >
                    {" "}
                    <i class="fa-solid fa-plus"></i>
                  </Add>
                  <Quantity>{count}</Quantity>
                  <Add onClick={handleSub}>
                    {" "}
                    <i class="fa-solid fa-minus"></i>
                  </Add>
                </Grid>
                <Grid item xs={4}>
                  <Total>Total: $</Total>
                </Grid>
                <Grid item xs={4}>
                  <Cart>Add to Cart</Cart>
                </Grid>
              </Grid>
            </ModalContent>
          </Overlay>
        </ModalDiv>
      )}
    </>
  );
};

export default Modal;
