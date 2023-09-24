- [POST - save data in mongodb](#post---save-data-in-mongodb)
- [GET - all data](#get---all-data)
- [GET - individual data](#get---individual-data)
- [PUT](#put)
- [DELETE](#delete)
- [MODEL](#model)
- [ROUTE/VIEW](#routeview)
- [CONTROLLER](#controller)

CRUD

- GET retrieves data from an API.
- POST sends new data to an API.
- PATCH and PUT update existing data.
- DELETE removes existing data.

# POST - save data in mongodb

> to create and save something into database(mongodb), we have to use a Model and since it relies on db we import them with mongoose.
> and to have Model we need a Schema

1️⃣ Data Model

```javascript
const mongoose = require('mongoose')

// creates data schema
const dataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    quantity: {
      type: Number,
      required: true,
      defaultValue: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// creates data model based on schema specified
const Datas = mongoose.model('Datas', dataSchema);

// export data model module
module.exports = Datas;
```

2️⃣ POST codes to add and save product to db in server.js

```javascript
// import Data Model
const Datas = require("./models/datasModel.js");

// middleware
app.use(express.json());

// POST to db
app.post("/datas", async (req, res, next) => {
  try {
    const datas = await Datas.create(req.body);
    res.status(200).json(datas);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
```
Use Postman to send a respond in JSON format consists of *name, qty, price, image*. Then, in Postman when we send a POST request it will return the products data that had saved in MongoDB with added *timestamps*.

# GET - all data

Fetch or Get data in JSON format from MongoDB. Use Postman to see the data where we will see the data in body.

> keywords: `find({})` find all

```javascript
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
```

# GET - individual data

> keywords: `findById`, `req.params`

```javascript
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getProducts = await Products.findById(id);
    res.status(200).json(getProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

Use Postman to test this route `"/products/:id"`. Replace `:id` with example ` "_id": "6505b7370e68929d129e7fa2"`.

# PUT

Update or Edit Data by id in Database

```javascript
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const editProduct = await Products.findByIdAndUpdate(id, req.body);
    // we cannot find any product in db
    if (!editProduct) {
      return res
        .status(404)
        .json({ message: `Product not found with ID ${id}` });
    }
    // if product successfully updated
    const updatedProduct = await Products.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

Use Postman and for example, go to `localhost:3000/products/65059c29f103b15c9a61eb60` to update that data. Open **Body -> raw JSON** and to update only the name of the product from iPhone 15 to Shampoo:

```json
{
    "name": "Shampoo"
}
```

**Important: there will be delay because the db will return own data (it changed but need to refresh twice)**

We're going to find product by ID again because we want to get the latest information from the db. To do that add variable below:

```javascript
const updatedProduct = await Products.findById(id);
res.status(200).json(updatedProduct);
```

If dont want to use JSON as test data can use Form URL Encoded/x-www-form-urlencoded in a key:value format.

But, we need to use middleware for the form which is `app.use(express.urlencoded({ extended: true }));`

# DELETE

Remove or Delete a Data by ID from Database

```javascript
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const delProduct = await Products.findByIdAndDelete(id);
    
    // we cannot find any product in db
    if (!delProduct) {
      return res
        .status(404)
        .json({ message: `Product not found with ID ${id}` });
    }

    // if product successfully deleted, server respond back to client with status 200
    res.status(200).json(delProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

# MODEL

# ROUTE/VIEW

when we talk about the back-end part we only talk about Route instead of View. our application won't have View yet until we dig into the front end part.

- routes should have only routes and not have all codes logic isnide the route files. so, move all logic to controllers.

# CONTROLLER

- refactor the Route, move the route codes to productController.
- all logics need to be inside the controller.