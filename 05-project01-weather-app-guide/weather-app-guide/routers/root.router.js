const { Router } = require("express");
const { getRoot } = require("../controllers/root.controller");

const router = Router();

router.route("/").get(getRoot);

module.exports = router;
