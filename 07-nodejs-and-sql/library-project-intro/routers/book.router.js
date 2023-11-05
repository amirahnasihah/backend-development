const { Router } = require("express");
const { createBookHandler,
  findManyBooks,
  findBookById,
  findOneBook,
  findBookByIdAndUpdate,
  findBookByIdAndDelete } = require("../controllers/book.controller");

const router = Router();

// router.route("/").post(<./controllers>)
router.route("/").post(createBookHandler);

module.exports = router;