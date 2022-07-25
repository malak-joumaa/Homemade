import React from "react";
import { Grid } from "@mui/material";
import { MapSearch } from "../../styles/Map.style";

const MapSearchBox = ({ route }) => {
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
              <input type="text" placeholder="Search" />
            </Grid>
          </>
        )}
      </Grid>
    </MapSearch>
  );
};

export default MapSearchBox;
