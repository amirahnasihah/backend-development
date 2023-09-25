const { Router } = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
} = require("../controllers/users.controllers");

const router = Router();

router.route("/").get(getUsers).post(createUser);
router
  .route("/:id")
  .get(getUserById)
  .delete(deleteUserById)
  .patch(updateUserById);

module.exports = router;
