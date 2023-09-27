- [Folder to focus](#folder-to-focus)
- [Code Explain](#code-explain)
  - [secrets.js](#secretsjs)
- [A very simple CRUD without database](#a-very-simple-crud-without-database)
  - [GET](#get)
  - [POST](#post)
  - [DELETE](#delete)
  - [UPDATE (PATCH vs PUT)](#update-patch-vs-put)

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

> what we want our url looks like: "/data"
> .get()

```javascript
const getAllData = (req, res) => {
  res.json(datas)
}
```

1. Get a specific data by ID

> our url route will looks like this: "/data/:id"
> .get()

- get data by id means this coming from the users asking for something from the server.
- imagine this, users want to get specific data by searching the ID. so, the users requests to get the data by ID from server. that's why we use `req.params`.
- then, the server will respond the specific data to the users back.

- users ask for a specific product. so, server will find the product by id where if the product id is same as what the user requested. While server is finding, if no product server will respond an error message. If product exist, we return that specific product.

```javascript
const getDataById = (req, res) => {}
```

## POST

> route wil be like this: "/data"
> .post()

Certainly! Here's a paraphrased version of the sentences to explain the `createData` code:

- When users want to create a new piece of data, they don't need to specify certain things like an ID.

- As the server, it wants to add this new data to a list (array) or, if there's a database, insert the new data into it. The important operations here are `push()` for adding to the list and the spread operator (`...`) to copy all the data from the object.

- To illustrate this, when users want to create new data, it's the users who make a request. They provide the values they want to create inside the *body* of the HTTP request, which is referred to as `req.body`. Users don't request data by searching in the URL (like `req.params`). So, we extract the key information from `req.body`.

- Then, as the client (user) requests to create new data, we want to make sure that all the required key values are provided. If not, we print an error message.

- When users request to add new data to the database, the server first checks if there is already existing data in the database with the same ID. If it finds existing data, it returns an error message. Otherwise, the server adds the new data to the database and returns the newly added data.

```javascript
const createData = (req, res) => {
  // server receives data from a client request, id and foo properties from the request's body.
  const {id, foo} = req.body;
  if (!id && foo) res.json({error: "Bad request"});
  
  const product = { id, foo };
  if (products.find((p) => p.id === Number(id) {
    return res.json({ error: "Product already existed" })
  }));
  
  products.push(product)
  res.json(product);
}
```

The line `const product = { id, foo };` is used to create a JavaScript object called `product`. Let me explain why this line is necessary:

In the code you provided, you're receiving data from a client request, specifically the `id` and `foo` properties from the request's body. These properties are extracted here: `const { id, foo } = req.body;`.

Now, you want to use this data to create a new "product" in your application. In JavaScript, it's common to organize data in objects. In this case, you want to create a new object that represents a product with the `id` and `foo` properties taken from the request.

So, the line `const product = { id, foo };` is creating a new object called `product` with two properties: `id` and `foo`. This is done to organize the data and prepare it for further processing. You can think of it as putting the extracted data into a neat package (the `product` object) so that you can easily work with it later in the code.

For example, you might want to do additional operations on this product object before saving it to your database or adding it to an array of products. By creating the `product` object, you have a structured way to store and manipulate the data related to the new product.

## DELETE

> route: "/data/:id"
> .delete()

**Deleting a User - Short Note**

- When a client make a request to delete a data, the ID of the data to be deleted is typically passed in the URL as a parameter.
- the **server extract ID from client's request parameter to find data to be deleted**.
- So, the server will use that ID that is passed to find the data to be deleted.
- Then, the **server will find the data in an array of database based on matching ID**.
- **While searching** for ID of data to be deleted, the **server need to check if the data exists or not in the database**. If not data with given ID exists, the server responds with an error status code 404.
- After search and confirm that the specific data is exist, the server then have to `filter` the array of datas to remove that specific data with given ID.
-  

```javascript
const deleteData = (req, res) => {
  // extract ID from client's request parameter.
  const {id} = req.params;
  // server find each current ID of data in db same as client's request parameter based on given ID.
  const data = datas.find((d) => d.id === Number(id));
  // to check data exist or not. if no requested data is found, server return error status to client.
  if (!data) res.json({error: "Data with given ID not found"});

  // assume the specified ID exists, server proceeds to filter whole database to able to remove the specified ID requested.
  // server filter each current ID of data in db NOT same as client's request parameter based on given ID in order for ID requested removed.
  datas = datas.filter((d) => d.id !== Number(id));
  // server return the specific data requested that was deleted to client.
  res.json(data)
}
```

> The client wants to delete specific data from database. So, the server have find and make sure that the specific data of the client wants to be deleted exist. otherwise, if no specific data exists, the server will throw an error status code 404. if data exist then no problem, move on to next line. **to delete the specific data, the server must check that the specific data of the client wants to be deleted exist**. after the server find and check that the specific data is exist, the server needs to filter the whole database. the server wants to delete the specific data requested, and the data is exist so the server needs to have the data that with have not the same ID with that specific data requested by the client to be deleted. in this way the data that have the same ID requested will be removed. that's why the server needs to filter the ID of whole database to be not the same as the ID of data requested by the client. that way, the `filter()` will return what the server wants which are the datas that does not have the same ID as the client requested.

Let's simplify the explanation even further:

1. **Client Wants to Delete Data**: Imagine the client (like a user of an app) wants to remove something specific from a list (like deleting a message).
2. **Server Checks if It Exists**: The server needs to make sure that the thing the client wants to delete is actually in the list. If it's not there, the server says, "Sorry, I couldn't find it!" (Status 404 means "not found").
3. **Data Exists, Now What?**: If the thing the client wants to delete is indeed in the list, the server needs to remove it. But it also needs to make sure it doesn't remove the wrong things. So, it checks every item in the list to see if it's the same as the one the client wants to delete.
4. **Filtering the List**: The server goes through the list and says, "Keep everything except the thing the client wants to delete." It does this by checking the ID of each item. If the ID matches the one the client wants to delete, it doesn't keep that item. But if the IDs don't match, it keeps them.
5. **Updated List**: Now, the server has a new list that doesn't include the thing the client wanted to delete. This new list is like the updated version of the original list.

**Explanation `users = users.filter((u) => u.id !== Number(id))`**

Certainly, let's break down the line `users = users.filter((u) => u.id !== Number(id));` step by step:

1. `users` is an array that contains a list of users in the system. Each user is represented as an object in this array.

2. `.filter()` is a JavaScript array method. It's used to create a new array with all elements that pass a certain condition. In this case, it's being used to create a new array that includes all users except the one we want to delete.

3. `(u) => u.id !== Number(id)` is a function that serves as the condition for filtering. It's applied to each element (`u`, which represents a user) in the `users` array.

   - `u.id` is the ID of the current user being examined by the filter.
   - `Number(id)` is the ID provided in the request (converted to a number to ensure it's the correct data type).

4. The condition `u.id !== Number(id)` checks whether the ID of the current user being examined does not match the ID provided in the request. In simpler terms, it's saying, "Keep all users whose IDs are not the same as the one we want to delete."

5. The result of `.filter()` is a new array that includes all users whose IDs do not match the ID we want to delete.

6. Finally, `users = users.filter((u) => u.id !== Number(id));` assigns this new filtered array back to the `users` variable, effectively updating the list of users to exclude the user with the specified ID.

So, in plain English, this line of code is creating a new list of users that doesn't include the user with the provided ID, and it updates the `users` variable to hold this updated list. In essence, it removes the user with the specified ID from the list of users.

## UPDATE (PATCH vs PUT)

