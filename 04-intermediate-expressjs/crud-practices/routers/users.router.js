const { Router } = require("express");

const router = Router();

router.route("/").get((req, res) => {
  res.json({ msg: "works!" });
});

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  res.json({ id: id });
});

module.exports = router;
