import {
  ModalLocDiv,
  OverlayLoc,
  ModalContentLoc,
} from "../../styles/Modal.style";
import Maps from "./Maps";

const MapsModal = ({
  route,
  setSelectedPosition,
  modal,
  locationName,
  setLocationName,
}) => {
  return (
    <>
      {modal && (
        <ModalLocDiv>
          <ModalContentLoc style={{ width: "600px", height: "350px" }}>
            <Maps
              selectedPosition={route}
              setSelectedPosition={setSelectedPosition}
              locationName={locationName}
              setLocationName={setLocationName}
            />
          </ModalContentLoc>
        </ModalLocDiv>
      )}
    </>
  );
};

export default MapsModal;
