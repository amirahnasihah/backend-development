- [CRUD for Products](#crud-for-products)
  - [CREATE/POST - create and save a product to db](#createpost---create-and-save-a-product-to-db)
  - [READ/GET - fetch all products from db](#readget---fetch-all-products-from-db)
  - [READ/GET - fetch single product by id (req.params)](#readget---fetch-single-product-by-id-reqparams)
  - [UPDATE/PUT - update a product by id in db](#updateput---update-a-product-by-id-in-db)
  - [DELETE - delete a product by id from db](#delete---delete-a-product-by-id-from-db)
- [Custom Middleware - errorMiddleware](#custom-middleware---errormiddleware)
  - [Express Async Handler](#express-async-handler)
- [CORS](#cors)
- [Deployment](#deployment)
  - [Upload code to GitHub via terminal](#upload-code-to-github-via-terminal)
  - [Deploy to render.com](#deploy-to-rendercom)

# CRUD for Products

These codes are inside a products controller file. (replace error handling with throw error and express async handler)

## CREATE/POST - create and save a product to db

```javascript
// Controller connect to Model so, import Model
const Products = require("../models/productsModel");
const asyncHandler = require("express-async-handler"); // express async handler

const createProduct = asyncHandler(async (req, res, next) => {
  try {
    const products = await Products.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message); // throw error message with asyncHandler
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
```

## READ/GET - fetch all products from db

```javascript
// Controller connect to Model so, import Model
const Products = require("../models/productsModel");

const getProducts = async (req, res) => {
  try {
    console.log("get products list");
    const getProducts = await Products.find({});
    res.status(200).json(getProducts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// export products controller
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
```

## READ/GET - fetch single product by id (req.params)

```javascript
// Controller connect to Model so, import Model
const Products = require("../models/productsModel");

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const getProducts = await Products.findById(id);
    res.status(200).json(getProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export products controller
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
```

## UPDATE/PUT - update a product by id in db

```javascript
// Controller connect to Model so, import Model
const Products = require("../models/productsModel");

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

// export products controller
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
```

## DELETE - delete a product by id from db

```javascript
// Controller connect to Model so, import Model
const Products = require("../models/productsModel");

const deleteProduct = async (req, res) => {
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
};

// export products controller
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
```

# Custom Middleware - errorMiddleware

> use express asyncHandler, throw new Error(), additional json response (stack)

Create an error middleware to make our application be more secure. How the server respond when there is an error, so we're going to create a fake error.

Middleware: is a callback function that can detect respond error request in our application.

> in server.js if we put `throw new Error("fake error")` and go to that route will show the fake error but its not secured.

**Error Middleware**

1. create a new folder called `middleware`
2. create a file named `errorMiddleware.js`
3. Inside the errorMiddleware.js file put:

```javascript
// errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
  console.log(`here is an error middleware`);
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    msg: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = errorMiddleware;
```

> 

1. after created middleware and export, go to *server.js*

```javascript
// server.js
const errorMiddleware = require("./middleware/errorMiddleware");

// throw error on root route, *localhost:3000/*
app.get("/", (req, res, next) => {
  throw new Error("fake error!");
  res.send("Hi fella!");
});

// use custom error middleware
app.use(errorMiddleware);
```

5. Uses Postman and it will show json response about the error

```json
{
    "msg": "fake error!"
}
```

6. `NODE_ENV` in dotenv file we put as for `development`. Because we are developing this application right now.
7. Inside the *errorMiddleware.js* file we are going to detect whether our application is in our development or production mode.
8. `res.json({ msg: err.message, stack: process.env.NODE_ENV === "development" ? err.stack : null});`: if it's equal to *development* we want to show a stack message but, if is in live production we want to show now. we don't want in production to show error to people because it's not secure for our application.
9. Then, we have to respond back is *status codes*.
10. `const statusCode = res.statusCode ? res.statusCode : 500;`: I access to respond and then I get status code. if you get a status that code, just show the status code but, if we don't get a stateus code just show 500 as a status code. `res.status(statusCode);`

> everytime ENV changed, have to run again the server

## Express Async Handler

> npm install --save express-async-handler
> it is a middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

when throw error inside data controller with async method it doesn't work, because the problem is async's function. when we have async function, we need to use Express Async Handler to solve this problem.

1. go to npmjs.com, search *express-async-handler* and install this code `npm install --save express-async-handler`.
2. run the app and import asyncHandler to controller file.
Example usage:

```javascript
const asyncHandler = require('express-async-handler')

express.get('/', asyncHandler(async (req, res, next) => {
	const bar = await foo.findAll();
	res.send(bar)
}))
```

3. then, use Postman to see the error message will show:

```json
// development
{
    "msg": "Cast to ObjectId failed for value \"65059c29f103b\" (type string) at path \"_id\" for model \"Products\"",
    "stack": "Error: Cast to ObjectId failed for value \"65059c29f103b\" (type string) at path \"_id\" for model \"Products\"\n    at C:\\Users\\Amirah Nasihah\\Desktop\\NODE CRUD API P02\\controllers\\productsController.js:26:11\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```

```json
// production
{
    "msg": "Cast to ObjectId failed for value \"65059c29f103b\" (type string) at path \"_id\" for model \"Products\"",
    "stack": null
}
```

So, this is how to apply using Handler to async function.

# CORS

> npm install cors

[CORS](https://expressjs.com/en/resources/middleware/cors.html) stands for Cross-Origin Resource Sharing. if you want to connect front-end to a back-end, you need to allow a specific IP or domain name to access to your back-end application or to send a request to your backend application. so if you don't allow it it will have a cross-site origin problem.

it's important for you to set up CORS policy in the back inside to allow front-end to connect with back-end.

**how to setup CORS:**

1. `npm install cors`
2. `const cors = require("cors");`
3. `app.use(cors())`

**Enable CORS for a Single Route:**

```javascript
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})
```

**Allowing only specific domain or IP address to access application?: Configuring CORS**

- `app.use(cors())`: if look at the code and don't specify a specific domain, it will allow anyone to access to our backend.
- nav [here](https://expressjs.com/en/resources/middleware/cors.html) on how to enable multiple route.
- copy below to server.js and add it to `app.use(cors(corsOptions))`.
- 

```javascript
// this allow only example domain.com to access to your backend or to access to this API
var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// multiple domains
var corsOptions = {
  origin: ['http://example.com', 'http://localhost:5173' ],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
```

# Deployment

## Upload code to GitHub via terminal

1. upload code to github
2. then, deploy to render.com

**upload to github from our computer:**

> remember to put unnecessary files/folders in `.gitignore` like node_modules, .env, etc

1. create a new repo in github website
2. open vscode, in terminal type:
  - `git init`
  - `git add .`
  - `git commit -m "project description"`
  - `git remote add origin REPO_URL` (make sure HTTPS)
  - `git branch -M main`
  - `git push -u origin main`

Below is SSH configuration:
```shell
git push -u origin main
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

To solve this issue, open git bash and follow these:

```txt
# Generate SSH key:
1. ssh-keygen -t ed25519 -C "YOUR_EMAIL"
2. keep clicking enter until sees key's randomart image

# Adding your SSH key to the ssh-agent:
3. eval "$(ssh-agent -s)"
4. ssh-add ~/.ssh/id_ed25519
5. clip < ~/.ssh/id_ed25519.pub (clip means copy pub file)
6. go to github SSH keys, add new ssh key and just paste CTRL+V the ssh keys
```

## Deploy to render.com

The server that we are going to use is [render.com](https://render.com/).

**how to deploy with render.com:**

