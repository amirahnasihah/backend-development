const { Router } = require("express");
const indexRouter = require("./index.router");
const productsRouter = require("./products.router");

const router = Router();

router.use("/", indexRouter);
router.use("/products", productsRouter);

module.exports = { router };
