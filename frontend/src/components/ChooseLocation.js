import React, { useState, useEffect } from "react";
import Maps from "./maps/Maps";

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
  console.log(data);

  return (
    <>
      <h1>Choose Location</h1>
      <span>{locationName}</span>
      <div style={{ width: "100%", height: "70%" }}>
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
