const express = require("express");
const { router } = require("./routers");
const { PORT, MODE } = require("./config/secret");
const { errorHandler } = require("./middlewares/error.middleware");

const port = 3000 || PORT;
const app = express();

app.use(express.json());
app.use(errorHandler);

// all routers (bookRouter)
app.use("/api", router);

console.log(MODE);
app.listen(port, () => {
  console.log("server running!");
});
