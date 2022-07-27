import React, { useState, useEffect } from "react";
import Maps from "./maps/Maps";

function ChooseLocation() {
  return (
    <>
      <h1>Choose Location</h1>
      <div style={{ width: "100%", height: "70%" }}>
        <Maps />
      </div>
    </>
  );
}

export default React.memo(ChooseLocation);
