import React from "react";
import Navbar from "../components/Navbar";
import { Display_Cook_Info } from "../styles/Container.style";

function SingleCook() {
  return (
    <div>
      <Navbar />
      <Display_Cook_Info></Display_Cook_Info>
    </div>
  );
}

export default SingleCook;
