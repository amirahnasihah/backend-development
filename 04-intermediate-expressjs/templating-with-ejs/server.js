const express = require("express");
// The node:path module provides utilities for working with file and directory paths
const path = require("path");
const { router } = require("./routers");

// handling secrets
// const config = require("./config/secrets");
const { FOO_SECRET } = require("./config/secrets"); // also can import FOO_SECRET directly
const { PORT } = require("./config/secrets");

const app = express();

// EJS
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(express.json());

// handling secrets
console.log(FOO_SECRET);

// get index route
app.use("/", router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
