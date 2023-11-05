const { Router } = require("express");
const { createBookHandler, getManyBooksHandler } = require("../controllers/book.controller");

const router = Router();

// router.route("/").post(<./controllers>)
router.route("/").post(createBookHandler).get(getManyBooksHandler);

module.exports = router;