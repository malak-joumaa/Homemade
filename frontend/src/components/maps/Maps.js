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

const Maps = ({
  selectedPosition,
  setSelectedPosition,
  locationName,
  setLocationName,
  coord,
}) => {
  const location = GeoLocation();
  useEffect(() => {
    getName();
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
      <Marker
        key={selectedPosition[0]}
        position={selectedPosition}
        interactive={false}
      />
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
        20,
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
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const greenIcon = new LeafIcon({
    iconUrl:
      "https://www.google.com/https://toppng.com/map-point-google-map-marker-gif-PNG-free-PNG-Images_164268?imgurl=https%3A%2F%2Fimg.favpng.com%2F20%2F11%2F24%2Fgoogle-map-maker-google-maps-computer-icons-map-collection-png-favpng-BNWkuCw9tdsBqxLR2PTzGbS6V.jpg&imgrefurl=https%3A%2F%2Ffavpng.com%2Fpng_view%2Fmap-marker-google-map-maker-google-maps-map-collection-png%2FcNTWStkY&tbnid=j8aV-BdeL3YjFM&vet=12ahUKEwjWjMa4iJr5AhVNwIUKHQ4mABgQMygMegUIARD_AQ..i&docid=E_ekYPUFcM4zXM&w=820&h=512&q=map%20marker&ved=2ahUKEwjWjMa4iJr5AhVNwIUKHQ4mABgQMygMegUIARD_AQ",
  });
  const [icon, setIcon] = useState(greenIcon);
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
        <Markers />
        {coord && (
          <Marker
            key={selectedPosition[0]}
            position={coord}
            interactive={false}
            icon={icon}
          />
        )}
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
