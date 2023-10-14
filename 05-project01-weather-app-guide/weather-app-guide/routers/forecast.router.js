const { Router } = require("express");
const { getWeather } = require("../controllers/forecast.controller");

const router = Router();

router.route("/").get(getWeather);

module.exports = router;
