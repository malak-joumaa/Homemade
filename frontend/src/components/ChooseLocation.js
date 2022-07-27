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
  useEffect(() => {
    getName();
  }, []);

  //Get the name of the selected location
  const getName = async () => {
    try {
      const res = await fetch(
        "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
          selectedPosition[0] +
          "&longitude=" +
          selectedPosition[1] +
          "&localityLanguage=en"
      );
      const data = await res.json();
      console.log(data);
      setLocationName("" + data.locality + ", " + data.countryName);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(locationName);

  return (
    <>
      <h1>Choose Location</h1>
      <span>{locationName}</span>
      <div style={{ width: "100%", height: "70%" }}>
        <Maps
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          getName={getName}
        />
      </div>
    </>
  );
}

export default React.memo(ChooseLocation);
