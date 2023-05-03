const express = require("express");
const app = express();
const industryRoute = require("./routes/industry");
const adminRoute = require("./routes/admin");

app.use(express.json());
app.use("/industry", industryRoute);
app.use("/admin", adminRoute);

module.exports = app;
