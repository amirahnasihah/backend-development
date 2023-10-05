const { Router } = require("express");
const {
  getPyramids,
  getPyramidShape,
} = require("../controllers/pyramid.controllers");

const router = Router();

router.route("/").get(getPyramids);
router.route("/:numsRow").get(getPyramidShape);

module.exports = router;
