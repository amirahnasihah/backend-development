const { Router } = require("express");
const { getRoot } = require("../controllers/root.controllers");

const router = Router();

router.route("/").get(getRoot);

module.exports = router;
