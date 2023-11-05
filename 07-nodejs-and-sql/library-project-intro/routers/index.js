const { Router } = require("express");
const { getIndex } = require("../controllers");

const router = Router();

router.use("/index", getIndex);

module.exports = { router };
