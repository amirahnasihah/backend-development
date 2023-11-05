const { Router } = require("express");
const { createBookHandler, getManyBooksHandler, deleteBookHandler, updateBookHandler } = require("../controllers/book.controller");

const router = Router();

// router.route("/").post(<./controllers>)
router.route("/").post(createBookHandler).get(getManyBooksHandler);
router.route("/:id").patch(updateBookHandler).delete(deleteBookHandler);

module.exports = router;