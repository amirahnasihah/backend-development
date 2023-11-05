const { Router } = require("express");
const { createBookHandler } = require("../controllers/book.controller");

const router = Router();

// router.route("/").post(<./controllers>)
router.route("/").post(createBookHandler);

module.exports = router;