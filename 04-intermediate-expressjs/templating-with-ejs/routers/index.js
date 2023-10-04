const { Router } = require("express");
const { indexRoute, profileRoute, pyramidRoute } = require("../controllers");

const router = Router();

router.route("/").get(indexRoute);

// self experiment //
router.route("/profile").get(profileRoute);

// assignment 03 //
router.route("/pyramid").get(pyramidRoute);
router.route("/pyramid/:numsRow").get(pyramidRoute);

// we do named export since this is the index file.
module.exports = { router };
