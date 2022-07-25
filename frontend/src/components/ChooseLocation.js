import React, { useState } from "react";
import Maps from "./maps/Maps";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

function ChooseLocation() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <span>Loading...</span>;
  }
  const center = { lat: 33.893791, lng: 35.501778 };
  return (
    <>
      <h1>Choose Location</h1>
      <div style={{ width: "100%", height: "80%" }}>
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </>
  );
}

export default React.memo(ChooseLocation);
