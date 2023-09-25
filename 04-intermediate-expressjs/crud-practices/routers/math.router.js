const { Router } = require("express");
const { getSum } = require("../controllers/math.controllers");

const router = Router();

// practice: create a Math route `/math/sum?n1=10&n2=20` it will return 30
router.route("/sum").get(getSum);

// here we use a default export
module.exports = router;
