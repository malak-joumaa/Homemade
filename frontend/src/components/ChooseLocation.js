import React, { useState, useEffect } from "react";
import Maps from "./maps/Maps";

function ChooseLocation() {
  const [selectedPosition, setSelectedPosition] = useState([
    33.893791, 35.501778,
  ]);
  return (
    <>
      <h1>Choose Location</h1>
      <div style={{ width: "100%", height: "70%" }}>
        <Maps
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
        />
      </div>
    </>
  );
}

export default React.memo(ChooseLocation);
