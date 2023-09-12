const express = require("express");
const app = express.Router();

/**
 * @path /api/users
 */

app.use("/users", require("./routes/users"));

/**
 * @path /api/admin
 */

app.use("/admins", require("./routes/admins"));

/**
 * @path /api/login
 */

app.use("/login", require("./routes/login"));

/**
 * @path /api/chartData
 */

app.use("/chartData", require("./routes/chartData"));

/**
 * @path /api/postAvatar
 */

app.use("/uploadImage", require("./routes/uploadImage"));

module.exports = app;
