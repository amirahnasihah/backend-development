const { Router } = require("express");

const router = Router();

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  res.json({ id: id });
});

module.exports = router;
