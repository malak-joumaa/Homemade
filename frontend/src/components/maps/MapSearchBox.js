import React from "react";
import { Grid } from "@mui/material";
import { MapSearch, SearchInput, LocationArrow } from "../../styles/Map.style";

const MapSearchBox = ({ route, map, center }) => {
  return (
    <MapSearch>
      <Grid container spacing={1}>
        {route ? (
          <>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <SearchInput type="text" placeholder="Search" />
              <LocationArrow onClick={() => map.panTo(center)}>
                <i className="fa-solid fa-location-arrow"></i>
              </LocationArrow>
            </Grid>
          </>
        )}
      </Grid>
    </MapSearch>
  );
};

export default MapSearchBox;
