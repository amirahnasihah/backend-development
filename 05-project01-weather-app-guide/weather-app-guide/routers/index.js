const { Router } = require("express");
const rootRouter = require("./root.router");
const weatherRouter = require("./forecast.router");

const router = Router();

router.use("/", rootRouter);
router.use("/forecast", weatherRouter);

module.exports = { router };
