let products = [
  {
    id: 1,
    name: "Soy sauce",
    price: 2.99,
  },
  {
    id: 2,
    name: "Shampoo",
    price: 3.99,
  },
  {
    id: 3,
    name: "Vinegar",
    price: 4.99,
  },
];

const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) res.status(404).json({ error: "Product not found" });
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

module.exports = { getProducts, getProductById, createProduct };
