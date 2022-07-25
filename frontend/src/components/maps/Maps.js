import React, { useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import MapSearchBox from "./MapSearchBox";

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(/**@type google.maps.Map*/ (null));

  if (!isLoaded) {
    return <span>Loading...</span>;
  }
  const center = { lat: 33.893791, lng: 35.501778 };
  return (
    <>
      <div style={{ width: "100%", height: "80%" }}>
        <MapSearchBox />
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%", zIndex: "-1" }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </>
  );
};

export default Maps;
