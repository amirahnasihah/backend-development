const { Router } = require("express");
const { getAllBooks } = require("../controllers/book.controller");

const router = Router();

// bookRouter
router.route("/").get(getAllBooks);

module.exports = router;
