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

module.exports = app;
