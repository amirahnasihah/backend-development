const { Router } = require("express");
const {
  getUsers,
  getUserById,
  createUser,
} = require("../controllers/users.controllers");

const router = Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUserById);

module.exports = router;
