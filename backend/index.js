require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./src/user");
const cookRouter = require("./src/menu");

// mongodDB online -> use Atlas
const DB_CONNECT = process.env.DB_CONNECT || "";
mongoose.connect(DB_CONNECT, (err) => {
  if (err) console.log(err);
  else console.log("Connected to db");
});
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/cook", cookRouter);
app.listen(5000, () => console.log("Server running"));
