const { Router } = require("express");
const { getForecast } = require("../controllers/forecast.controllers");

const router = Router();

router.route("/").get(getForecast);

module.exports = router;
