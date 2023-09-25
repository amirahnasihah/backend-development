const { Router } = require("express");
const { getUsers, getUserById } = require("../controllers/users.controllers");

const router = Router();

router.route("/").get(getUsers);
router.route("/:id").get(getUserById);

module.exports = router;
