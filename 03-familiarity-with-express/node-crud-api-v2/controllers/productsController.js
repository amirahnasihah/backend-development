const Products = require("../models/productsModel");
const asyncHandler = require("express-async-handler");

/* CRUD for Products */
// GET - fetch all products from db
const getProducts = asyncHandler(async (req, res) => {
  try {
    console.log("get products list");
    const getProducts = await Products.find({});
    res.status(200).json(getProducts);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// GET - fetch single product by id (req.params)
const getProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const getProducts = await Products.findById(id);
    res.status(200).json(getProducts);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    res.status(500);
    throw new Error(error.message);
  }
});

// POST - create and save a product to db
const createProduct = asyncHandler(async (req, res, next) => {
  try {
    const products = await Products.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// PUT - update a product by id in db
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const editProduct = await Products.findByIdAndUpdate(id, req.body);

    if (!editProduct) {
      // return res.status(404).json({ message: `Product not found with ID ${id}` });
      res.status(404);
      throw new Error(`Product not found with ID ${id}`);
    }

    const updatedProduct = await Products.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// DELETE - delete a product by id from db
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const delProduct = await Products.findByIdAndDelete(id);
    if (!delProduct) {
      // return res.status(404).json({ message: `Product not found with ID ${id}` });
      res.status(404);
      throw new Error(`Product not found with ID ${id}`);
    }

    res.status(200).json(delProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// export products controller
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
