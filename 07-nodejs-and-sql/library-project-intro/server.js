const express = require("express");
const { errorHandler } = require("./middleware/error.middleware");
const { PORT, NODE_ENV } = require("./config/secrets");
const { router } = require("./routers");
const { db } = require("./models");
const port = PORT || 3000;

const app = express();
app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

app.listen(port, () => {
  db.authenticate();
  db.sync();
  console.log("server running!");
});
