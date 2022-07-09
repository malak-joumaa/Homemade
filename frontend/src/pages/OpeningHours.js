import React, { useState } from "react";
import { Link } from "react-router-dom";

const OpeningHours = () => {
  return (
    <div>
      <div className="follow-up-div">
        {/* Title */}
        <h1>Set Opening Hours</h1>

        {/* Main Content */}
        <div id="oph-photo"></div>
        <div className="setTime">
          From <input type="time" id="oph" name="oph" required />
          Till <input type="time" id="oph" name="oph" required />
        </div>

        {/* Links */}
        <Link to="/opening-hours" className="skip">
          Skip
        </Link>
        <Link to="/opening-hours" className="next">
          Next -{">"}
        </Link>
      </div>
    </div>
  );
};

export default OpeningHours;
