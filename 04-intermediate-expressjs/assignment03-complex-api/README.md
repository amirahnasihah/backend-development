- [Folder to focus](#folder-to-focus)
- [Code Explain](#code-explain)
  - [secrets.js](#secretsjs)
- [A very simple CRUD without database](#a-very-simple-crud-without-database)
  - [GET](#get)
  - [POST](#post)

# Folder to focus

1. Initiate npm. Install related dependencies: express, nodemon, dotenv
2. Create *server.js* file and run with nodemon.
3. Create folders for separation of concerns: routers, controllers, config. Each folder has its own *index.js* file, config has *secrets.js*.
4. Create *.env* file to store environment variables.
5. Setup environment variables with *secrets.js* file.

# Code Explain

## secrets.js

```javascript
const dotenv = require("dotenv");
const path = require("path");

console.log(process.env);

const config = dotenv.config({ path: path.resolve(__dirname, "../.env") });

module.exports = { ...process.env}
```

The code in simple terms:

```javascript
// We're telling our program to use two special tools or "modules" that help us with configuration.
// Think of them as tools in your toolbox.
const dotenv = require("dotenv");
const path = require("path");

// This line does two things:
// 1. It reads the configuration information from a file called ".env" (similar to a settings file).
// 2. It stores this configuration in a variable called "config."
const config = dotenv.config({ path: path.resolve(__dirname, "../.env") });

// This line exports (shares) all the configuration settings we loaded from ".env" with the rest of our program.
// It's like sharing your list of ingredients with your friends so everyone can use them in the recipe.
module.exports = { ...process.env };
```

In even simpler terms:

1. We have two tools (modules) called `dotenv` and `path` that help us set up our program.

2. We read some important settings from a file named `.env` and store them in a variable called `config`. Imagine `.env` as a list of ingredients for your recipe.

3. We share these settings (ingredients) with the rest of our program, so every part of the program can use them when needed. It's like sharing your ingredients with your friends for cooking together.

**why use bracket { ...process.env }:**

The line `module.exports = { ...process.env }` is used to export the environment variables loaded from the `.env` file so that other parts of your Node.js application can access and use these variables.

Here's why the `{ ...process.env }` syntax is used:

1. `process.env` is an object in Node.js that contains all the environment variables for your application. These variables are typically set by the operating system or through configuration.

2. By using `{ ...process.env }`, you are creating a new object that is a copy of `process.env`. This copy is important because it allows you to modify and manage the environment variables independently within your module, without affecting the global `process.env`.

3. Exporting this copy of environment variables makes them available for other parts of your application when you import this module. It encapsulates the environment variables, making it easier to manage and share them without unintentional changes elsewhere in your code.

In summary, the use of `{ ...process.env }` is a way to create a separate copy of the environment variables for your module and export them so that other parts of your application can use them without altering the global `process.env`. It provides a level of encapsulation and control over your environment variables.

# A very simple CRUD without database

- below, we not using async/await, trycatch, express status, express async handler. just a very simple crud app.
- since we not using any database, just create empty array variable. use `let`.

```javascript
let datas = [
  {
    id: 1,
    foo: "bar",
  }
]
```

## GET

1. Get all datas

> what we want our url looks like: "/api/products"

```javascript
const getDatas = (req, res) => {
  res.json(datas)
}
```

1. Get a specific data by ID

> what we want our url looks like: "/api/products/:id"

- get data by id means this coming from the users asking for something from the server.
- imagine this, users want to get specific data by searching the ID. so, the users requests to get the data by ID from server. that's why we use `req.params`.
- then, the server will respond the specific data to the users back.

- users ask for a specific product. so, server will find the product by id where if the product id is same as what the user requested. While server is finding, if no product server will respond an error message. If product exist, we return that specific product.

```javascript
const getDataById = (req, res) => {}
```

## POST

- when creating a new data, the users no need to put a specific things such as ID.
- so, as the server, it wants to push that new data to an array. or if have database, server push new data into the database. keyword here is `push()` and spread operator (`...`) which means copy all the data object.
- so imagine this, when wants to create a new data its the users who will request. and the users put the values that they want to create, which inside the *body* of the HTTP request, so its `req.body`. because the users not request data from searching url (req.params). (extract the key object from req.body)
- then, as client wants to create a new data, we want to have all the values to be putted.
- the users request to post new data to the database. then, the server will find if there is already existing data and return error message. otherwise, server will push new data to the database and return the that new data.

```javascript
const createData = (req, res) => {
  const {id, foo} = req.body;
  
}
```