import React, { useState, useEffect } from "react";
import Maps from "./maps/Maps";
import { Location } from "../styles/Map.style";

function ChooseLocation({ setData, data }) {
  const [selectedPosition, setSelectedPosition] = useState([
    33.893791, 35.501778,
  ]);
  const [locationName, setLocationName] = useState("");
  data[1].location = {
    type: "Point",
    coordinates: selectedPosition,
    location: locationName,
  };
  setData(data);
  return (
    <>
      <h1>Choose Location</h1>
      <Location>{locationName}</Location>
      <div style={{ width: "100%", height: "64%" }}>
        {/* Display Map */}
        <Maps
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          locationName={locationName}
          setLocationName={setLocationName}
        />
      </div>
    </>
  );
}

export default React.memo(ChooseLocation);
