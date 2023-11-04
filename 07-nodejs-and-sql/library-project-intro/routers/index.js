const { Router } = require("express");
const { getInfo } = require("../controllers");

const router = Router();

router.route("/").get(getInfo);

module.exports = { router };
