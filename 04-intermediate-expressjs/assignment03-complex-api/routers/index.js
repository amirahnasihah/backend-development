const { Router } = require("express");
const indexRouter = require("./index.router");
const productsRouter = require("./products.router");
const pyramidRouter = require("./pyramid.router");

const router = Router();

router.use("/", indexRouter);
router.use("/products", productsRouter);
router.use("/pyramid", pyramidRouter);

module.exports = { router };
