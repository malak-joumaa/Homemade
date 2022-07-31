import {
  ModalLocDiv,
  OverlayLoc,
  ModalContentLoc,
} from "../../styles/Modal.style";
import Maps from "./Maps";

const MapsModal = ({ route, modal }) => {
  return (
    <>
      {modal && (
        <ModalLocDiv>
          <ModalContentLoc style={{ width: "600px", height: "350px" }}>
            <Maps selectedPosition={route} coord={[]} />
          </ModalContentLoc>
        </ModalLocDiv>
      )}
    </>
  );
};

export default MapsModal;
