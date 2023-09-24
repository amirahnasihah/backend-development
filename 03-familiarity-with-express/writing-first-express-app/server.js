const express = require("express");

const app = express();

/* can chain multiple http methods together

- app.route('/').get().post().put().patch().delete()

- app.route("/").get() this is a router
- (req, res) => {...} is actually a controller.
*/
app.route("/").get((req, res) => {
  res.json({ msg: "Hi!!" });
});

// parameters in the path
app.route("/users/:id").get((req, res) => {
  const { id } = req.params;
  res.json({ id: id });
});

app.listen(3000, () => {
  console.log("Yay! server is live!");
});
