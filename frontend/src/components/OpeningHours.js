import { Grid } from "@mui/material";
import React, { useState } from "react";
import Photo from "../assets/hours.png";
import { Description, CookDescription } from "../styles/Container.style";

const OpeningHours = ({ setData, data }) => {
  const [valid, setValid] = useState(false);
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTill, setTimeTill] = useState("");
  const [desc, setDesc] = useState("");

  console.log(timeFrom);
  console.log(timeTill);
  console.log(data[2]);
  console.log(data[3]);

  return (
    <>
      <h1>Opening Hours - Description</h1>
      <div>
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
                data[2].openingHours.from = e.target.value;
                setData(data);
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
                data[2].openingHours.till = e.target.value;
                setData(data);
              }}
              required
              id={!valid ? "" : "oph-validity"}
              onClick={(e) => {
                setValid(true);
              }}
            />
          </div>
        </div>
        <CookDescription>
          <label id="desc">Cook/Restaurant Description:</label>
          <br />
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Description
                id="description"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                  data[3].description = e.target.value;
                  setData(data);
                }}
              />
            </Grid>
          </Grid>
        </CookDescription>
      </div>
    </>
  );
};

export default OpeningHours;
