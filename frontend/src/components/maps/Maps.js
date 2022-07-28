import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  useMapEvents,
} from "react-leaflet";
import GeoLocation from "./GeoLocation";
import * as L from "leaflet";
import { requirePropFactory } from "@mui/material";
import RoutineMachine from "./RoutingMachine";

const Maps = ({
  selectedPosition,
  setSelectedPosition,
  locationName,
  setLocationName,
  coord,
}) => {
  console.log(selectedPosition.lenght);
  const location = GeoLocation();
  useEffect(() => {
    if (selectedPosition.length > 0) {
      getName();
    }
  }, []);
  console.log(locationName);
  console.log(selectedPosition);
  //Function to display marker on click
  const Markers = () => {
    const map = useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
        console.log(selectedPosition);
        getName();
      },
    });
    return selectedPosition ? (
      <>
        {!coord && (
          <Marker
            key={selectedPosition[0]}
            position={selectedPosition}
            interactive={false}
          />
        )}
      </>
    ) : null;
  };

  //Function to get current location
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      setSelectedPosition([
        location.coordinates.lat,
        location.coordinates.long,
      ]);
      useMap.current.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.long],
        13,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

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

  return (
    <>
      <MapContainer
        center={selectedPosition}
        zoom="12"
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {coord && <RoutineMachine marker1={selectedPosition} marker2={coord} />}
        <Markers />
      </MapContainer>
      {!coord && (
        <button
          className="locate-me-btn btn"
          onClick={(e) => {
            e.preventDefault();
            showMyLocation();
          }}
        >
          Locate Me
        </button>
      )}
    </>
  );
};

export default Maps;
