require("dotenv").config();
const mongoose = require("mongoose");

const DB_CONNECT = process.env.DB_CONNECT || "";
mongoose.connect(DB_CONNECT, () => console.log("connected to db"));
