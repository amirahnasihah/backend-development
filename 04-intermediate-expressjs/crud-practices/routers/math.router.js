const { Router } = require("express");
const { getSum, postSum } = require("../controllers/math.controllers");

const router = Router();

// practice: create a Math route `/math/sum?n1=10&n2=20` it will return 30
router.route("/sum").get(getSum).post(postSum);

// here we use a default export
module.exports = router;
