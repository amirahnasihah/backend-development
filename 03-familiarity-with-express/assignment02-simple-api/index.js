const express = require("express");
const app = express();
const port = 3000;

app.get("/api/:animal", (req, res, next) => {
  const { animal } = req.params;
  res.send(`${animal} is the best!`);
});

app.get("/api/exponent/:n/:m", (req, res) => {
  const { n, m } = req.params;

  const result = Math.pow(Number(n), Number(m));

  res.send(`${n}^${m} is ${result}`);
});

app.listen(port, () => {
  console.log("App is listening on port " + port);
});
