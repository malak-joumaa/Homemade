import React, { useState } from "react";
import Maps from "./maps/Maps";

function ChooseLocation() {
  return (
    <>
      <h1>Choose Location</h1>
      <Maps />
    </>
  );
}

export default React.memo(ChooseLocation);
