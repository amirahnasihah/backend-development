const { Router } = require("express");
const {
  pyramidByParam,
  getPyramids,
} = require("../controllers/pyramid.controllers");

const router = Router();

router.route("/").get(getPyramids);
router.route("/:numsRow").get(pyramidByParam);

module.exports = router;
