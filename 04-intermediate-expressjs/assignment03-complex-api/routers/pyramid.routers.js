const { Router } = require("express");
const { pyramidByParam } = require("../controllers/pyramid.controllers");

const router = Router();

router.route("/:row").get(pyramidByParam);

module.exports = router;
