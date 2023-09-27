let products = [
  {
    id: 1,
    name: "Product One",
    price: 2.99,
  },
  {
    id: 2,
    name: "Product Two",
    price: 3.99,
  },
  {
    id: 3,
    name: "Product Three",
    price: 4.99,
  },
];

const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) res.json({ error: "Product not found" });

  res.json(product);
};

const createProduct = (req, res) => {
  const { id, name, price } = req.body;
  if (!id && name && price) res.json({ error: "Bad request" });

  const product = { id, name, price };
  if (products.find((p) => p.id === Number(id)))
    res.json({ error: "Product already exists" });

  products.push(product);
  res.json(product);
};

const deleteProductById = (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p.id === Number(id));
  if (!product) res.json({ error: "Product with given ID not exist" });

  products = products.filter((p) => p.id !== Number(id));
  res.json(product);
};

const updateProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) res.json({ error: "Product with given ID not exist" });

  products = products.filter((p) => p.id !== Number(id));
  const updatedProduct = {
    ...product,
    ...req.body,
  };

  products.push(updatedProduct);
  res.json(updatedProduct);
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProductById,
  updateProductById,
};
