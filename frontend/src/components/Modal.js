import React, { useState } from "react";
import { Grid } from "@mui/material";
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
  Choice,
  Quantity,
  Total,
  Cart,
  Add,
  Close,
  QA,
} from "../styles/Modal.style";
import { DishName, DishDescription, DishPrice } from "../styles/Menu.style";
import defaultDish from "../assets/default-plate.jpg";
import toast from "react-hot-toast";

const Modal = (data) => {
  const details = data.data;
  const [modal, setModal] = useState(false);
  const [answers, setAnswers] = useState([]);

  const toggleModal = () => setModal(!modal);
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  console.log(details._id);

  //   Counter for quantity
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    if (count < details.quantity) {
      setCount(count + 1);
      setTotal(total + details.price);
    }
    if (count === details.quantity) {
      toast.error(details.quantity + " is the maximum quantity available");
    }
  };
  const handleSub = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotal(total - details.price);
    }
  };
  console.log(count);

  //   Total calculation
  const [total, setTotal] = useState(details.price);

  console.log(data);

  const AddToCart = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/order/add-order", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          quantity: count,
          total: total,
          cook: "62d5e7b5d669ef55bdc9424d",
          customer: localStorage.getItem("customer_id"),
          dish: details._id,
          answers: answers,
          status: "cart",
        }),
      });
      const data2 = await res.json();
      console.log(data2);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(details.questions[0].question);
  console.log(answers);
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
              <Photo src={details.photo ? details.photo : defaultDish} />

              <DishName>{details.name}</DishName>
              <br />
              <DishPrice>{details.price}$</DishPrice>
              <br />
              <DishDescription>{details.description}</DishDescription>
              <br />
              <QA>
                {/* Map */}
                {details.questions.map((singleQuest, index) => (
                  <>
                    {singleQuest.type === "checkBox" &&
                      (answers[index] = new Array(
                        singleQuest.choices.length
                      ).fill(""))}
                    <Question>{singleQuest.question}</Question>
                    <br />
                    {singleQuest.type === "textBox" ? (
                      <AnswerTxt
                        type="textBox"
                        value={answers[index]}
                        onChange={(e) => {
                          answers[index] = e.target.value;
                          setAnswers(answers);
                          console.log(answers);
                        }}
                      />
                    ) : (
                      singleQuest.choices.map((choice, choiceIndex) => (
                        <>
                          {singleQuest.type === "radio" && (
                            <AnswerRadio
                              key={choiceIndex}
                              type={singleQuest.type}
                              value={choice}
                              name={singleQuest}
                              onChange={(e) => {
                                answers[index] = e.target.value;
                                setAnswers(answers);
                                console.log(answers);
                              }}
                            />
                          )}
                          {singleQuest.type === "checkBox" && (
                            <AnswerCheck
                              key={choiceIndex}
                              type="checkbox"
                              value={choice}
                              onChange={(e) => {
                                answers[index][choiceIndex] = e.target.checked
                                  ? e.target.value
                                  : "";
                                setAnswers(answers);
                                console.log(answers);
                              }}
                            />
                          )}
                          <Choice>{choice}</Choice>
                        </>
                      ))
                    )}
                  </>
                ))}
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
                  <Total>Total: {total}$</Total>
                </Grid>
                <Grid item xs={4}>
                  <Cart onClick={AddToCart}>Add to Cart</Cart>
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
