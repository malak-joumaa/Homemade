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
          <OverlayLoc>
            <ModalContentLoc style={{ width: "450px", height: "300px" }}>
              <Maps
                selectedPosition={route}
                setSelectedPosition={setSelectedPosition}
                locationName={locationName}
                setLocationName={setLocationName}
                color="#7dc1a2"
              />
            </ModalContentLoc>
          </OverlayLoc>
        </ModalLocDiv>
      )}
    </>
  );
};

export default MapsModal;
