import React, { useState } from "react";
import { Container } from "@mui/material";
import {
  ModalDiv,
  Overlay,
  ModalContent,
  AddDish,
} from "../styles/Modal.style";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <AddDish onClick={toggleModal}>
        <i class="fa-solid fa-plus"></i>
      </AddDish>
      {modal && (
        <ModalDiv>
          <Overlay>
            <ModalContent>
              <h2>Test</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button onClick={toggleModal}>Close</button>
            </ModalContent>
          </Overlay>
        </ModalDiv>
      )}
    </>
  );
};

export default Modal;
