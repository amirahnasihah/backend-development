const { Router } = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  deleteProductById,
  updateProductById,
} = require("../controllers/products.controllers");

const router = Router();

router.route("/").get(getProducts).post(createProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProductById)
  .patch(updateProductById);

module.exports = router;
