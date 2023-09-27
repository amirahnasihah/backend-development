const { Router } = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} = require("../controllers/products.controllers");

const router = Router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProductById).delete(deleteProduct);

module.exports = router;
