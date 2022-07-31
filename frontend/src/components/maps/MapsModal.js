import React, { useState } from "react";
import { ModalDiv, Overlay, ModalContent } from "../../styles/Modal.style";
import Maps from "./Maps";

const MapsModal = ({ route }) => {
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
        <ModalDiv onClick={toggleMapsModal}>
          <Overlay>
            <ModalContent style={{ width: "500px", height: "500px" }}>
              <Maps selectedPosition={route[0]} coord={route[1]} />
            </ModalContent>
          </Overlay>
        </ModalDiv>
      )}
    </>
  );
};

export default MapsModal;
