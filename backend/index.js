require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const DB_CONNECT = process.env.DB_CONNECT || "";
mongoose.connect(DB_CONNECT, () => console.log("connected to db"));

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log("Server running"));
