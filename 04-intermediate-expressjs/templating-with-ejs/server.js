const express = require("express");
const path = require("path");
const { router } = require("./routers");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(express.json());

// get index route
app.use("/", router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
