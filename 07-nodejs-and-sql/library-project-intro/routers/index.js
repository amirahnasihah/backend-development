const { Router } = require("express");
const bookRouter = require("./book.router");

// const { getIndex } = require("../controllers"); // test
const router = Router();

router.use("/books", bookRouter);

// router.use("/index", getIndex); // test
module.exports = { router };
