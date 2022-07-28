import React, { useState } from "react";
import { ModalDiv, Overlay, ModalContent } from "../styles/Modal.style";

const MapsModal = () => {
  const [modal, setMapsModal] = useState(false);

  const toggleMapsModal = () => setMapsModal(!modal);
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <i className="fa-solid fa-location-dot" onClick={toggleMapsModal}></i>
      {modal && (
        <ModalDiv>
          <Overlay>
            <ModalContent></ModalContent>
          </Overlay>
        </ModalDiv>
      )}
    </>
  );
};

export default MapsModal;
