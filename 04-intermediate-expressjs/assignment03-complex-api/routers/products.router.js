const { Router } = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
} = require("../controllers/products.controllers");

const router = Router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProductById);

module.exports = router;
