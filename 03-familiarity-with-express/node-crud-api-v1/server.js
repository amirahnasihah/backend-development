const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const Products = require("./models/productsModel");

// middleware
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("Hi fella!");
});

app.get("/blog", (req, res, next) => {
  console.log("blog route");
  res.send("This is a blog!");
});

/* CRUD */
// POST - create and save product to db
app.post("/products", async (req, res, next) => {
  try {
    const products = await Products.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// GET - fetch all products from db
app.get("/products", async (req, res) => {
  try {
    console.log("get products list");
    const getProducts = await Products.find({});
    res.status(200).json(getProducts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
``;

// GET - individual product by id (req.params)
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getProducts = await Products.findById(id);
    res.status(200).json(getProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT - update a data by id in db
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const editProduct = await Products.findByIdAndUpdate(id, req.body);

    if (!editProduct) {
      return res
        .status(404)
        .json({ message: `Product not found with ID ${id}` });
    }

    const updatedProduct = await Products.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE - delete a data by id from db
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const delProduct = await Products.findByIdAndDelete(id);
    if (!delProduct) {
      return res
        .status(404)
        .json({ message: `Product not found with ID ${id}` });
    }

    res.status(200).json(delProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// connect to database MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:Password1@amirahapi.1cle7dd.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(port, () => {
      console.log("App listening on port " + port);
    });
  })
  .catch((error) => console.log(error));
