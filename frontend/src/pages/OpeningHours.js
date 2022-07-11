import React, { useState } from "react";
import { Link } from "react-router-dom";
import Photo from "../assets/hours.png";

const OpeningHours = () => {
  const [valid, setValid] = useState(false);
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTill, setTimeTill] = useState("");
  console.log(timeFrom);
  console.log(timeTill);

  return (
    <div>
      <div className="follow-up-div">
        {/* Title */}
        <h1>Set Opening Hours</h1>
        <div className="oph-div">
          {/* Main Content */}
          <div id="oph-photo">
            <img src={Photo} />
          </div>
          <div id="setTime">
            From{" "}
            <input
              type="time"
              className="oph"
              name="oph"
              value={timeFrom}
              onChange={(e) => {
                setTimeFrom(e.target.value);
              }}
              required
              id={!valid ? "" : "oph-validity"}
              onClick={() => {
                setValid(true);
              }}
            />
            Till{" "}
            <input
              type="time"
              className="oph"
              name="oph"
              value={timeTill}
              onChange={(e) => {
                setTimeTill(e.target.value);
              }}
              required
              id={!valid ? "" : "oph-validity"}
              onClick={(e) => {
                setValid(true);
              }}
            />
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
    </div>
  );
};

export default OpeningHours;
