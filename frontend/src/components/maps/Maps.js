import { MapContainer, TileLayer, useMap } from "react-leaflet";
import GeoLocation from "./GeoLocation";

const Maps = ({ selectedPosition, setSelectedPosition }) => {
  const location = GeoLocation();

  //Function to get current location
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      setSelectedPosition([
        location.coordinates.lat,
        location.coordinates.long,
      ]);
      useMap.current.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.long],
        20,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  return (
    <>
      <MapContainer
        center={[33.893791, 35.501778]}
        zoom="12"
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <button
        className="locate-me-btn btn"
        onClick={(e) => {
          e.preventDefault();
          showMyLocation();
        }}
      >
        Locate Me
      </button>
    </>
  );
};

export default Maps;
