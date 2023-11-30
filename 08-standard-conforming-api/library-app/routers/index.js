const { Router } = require("express");
const bookRouter = require("./book.router");

const router = Router();

router.use("/books", bookRouter);

module.exports = { router };
