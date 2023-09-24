const express = require("express");

const app = express();

app.route("/").get((req, res) => {
  res.json({ msg: "Hi!!" });
});

app.route("/users/:id").get((req, res) => {
  const { id } = req.params;
  res.json({ id: id });
});

app.listen(3000, () => {
  console.log("Yay! server is live!");
});
