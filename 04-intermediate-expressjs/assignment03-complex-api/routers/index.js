const { Router } = require("express");
const indexRouter = require("./index.router");
const productsRouter = require("./products.router");
const { pyramidByParam } = require("../controllers/pyramid.controllers");

const router = Router();

router.use("/", indexRouter);
router.use("/products", productsRouter);
router.use("/pyramid", pyramidByParam);

module.exports = { router };
