require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const helmet = require("helmet");
const db = require("./db");

app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/htmlImages", express.static("htmlImages"));

/**
 * @path /api
 */

app.use("/api", require("./api"));

db.connect();

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {
  console.log(`Server up and running on port ${SERVER_PORT}`);
});
