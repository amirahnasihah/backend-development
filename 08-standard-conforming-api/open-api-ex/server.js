const express = require("express");
const { routers } = require("./routers");
const port = 3000;

const app = express();

app.use(express.json());

app.use("/api", routers);

// Basic route for the root URL "/"
// app.route("/").get( (req, res, next) => {
//  res.json({ msg: "OK" });
// });

app.listen(port, () => {
  console.log("server is live!");
});
