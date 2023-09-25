const { Router } = require("express");
const { indexRoute, profileRoute } = require("../controllers");

const router = Router();

router.route("/").get(indexRoute);

// self experiment //
router.route("/profile").get(profileRoute);

// we do named export since this is the index file.
module.exports = { router };
