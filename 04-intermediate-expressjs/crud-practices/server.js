const express = require("express");
const { router } = require("./routers");

const app = express();
// standard to add prefix with /api
app.use("/api", router);

// practice: create a Math route `/math/sum?n1=10&n2=20` it will return 30

app.listen(3000, () => {
  console.log("Yay! server is live!");
});
