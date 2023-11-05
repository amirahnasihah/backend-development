const { Router } = require("express");
const { createBookHandler, getManyBooksHandler } = require("../controllers/book.controller");

const router = Router();

// router.route("/").post(<./controllers>)
router.route("/").post(createBookHandler).get(getManyBooksHandler);
router.route("/:id").patch().delete();

module.exports = router;