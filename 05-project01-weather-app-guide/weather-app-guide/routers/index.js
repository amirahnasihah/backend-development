const { Router } = require("express");
const rootRouter = require("../controllers/root.controllers");
const forecastRouter = require("../controllers/forecast.controllers");

const router = Router();

router.route("/", rootRouter);

router.route("/forecast", forecastRouter);

module.exports = { router };
