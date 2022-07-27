import { MapContainer, TileLayer } from "react-leaflet";

const Maps = () => {
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
    </>
  );
};

export default Maps;
