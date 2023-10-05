const express = require("express");
const { router } = require("./routers");
const path = require("path");

const app = express();

const { PORT } = require("./config/secrets");
const port = process.env.PORT || PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
