const express = require("express");
const path = require("path");
const { router } = require("./routers");
const { EXPRESS_OPENCAGE_API, PORT, TEST_ENV } = require("./config/secrets");
const port = process.env.PORT || 300;

const app = express();

// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// handling secrets
console.log("env:", TEST_ENV);

// routes
app.use("/api", router);

// server running
app.listen(port, () => {
  console.log(`app running on port ${PORT}`);
});
