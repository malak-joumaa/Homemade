import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

const Maps = () => {
  return (
    <>
      <MapContainer
        center={[33.893791, 35.501778]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "80%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[33.893791, 35.501778]}></Marker>
      </MapContainer>
    </>
  );
};

export default Maps;
