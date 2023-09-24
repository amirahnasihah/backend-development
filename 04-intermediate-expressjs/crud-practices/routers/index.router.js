const { Router } = require("express");

const router = Router();

router.route("/").get((req, res) => {
  res.json({ msg: "Hi!!" });
});

module.exports = router;
