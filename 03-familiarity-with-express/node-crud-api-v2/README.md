[Build Restful CRUD API with Node.js, Express and MongoDB in for Beginners from Scratch](https://www.youtube.com/watch?v=9OfL9H6AmhQ&t=761s&pp=ygUTZXhwcmVzcyBqcyB0dXRvcmlhbA%3D%3D)

> [source](https://www.youtube.com/watch?v=9OfL9H6AmhQ&t=761s&pp=ygUTZXhwcmVzcyBqcyB0dXRvcmlhbA%3D%3D)

- [Get Started](#get-started)
- [Express.js](#expressjs)
- [Install Nodemon](#install-nodemon)
- [Connect App with Database (MongoDB, MySQL etc.)](#connect-app-with-database-mongodb-mysql-etc)
- [Create a Model for Data in Database](#create-a-model-for-data-in-database)
  - [Model](#model)
  - [Schema](#schema)
- [CRUD](#crud)
  - [Use a Model to Save Data in MongoDB](#use-a-model-to-save-data-in-mongodb)
  - [GET Data from MongoDB](#get-data-from-mongodb)
  - [Update or Edit Data in Database](#update-or-edit-data-in-database)
  - [Remove or Delete Data from Database](#remove-or-delete-data-from-database)

# Get Started

1. install nodejs (LTS version), check if its installed on shell by `node -v`.
2. create new folder for the app, name it and open it with VSCode.
3. go to new terminal and type `npm init -y` to create *package.json* file.
4. then, create new file *server.js* where all the codes for our backend are here.
5. lets run server.js file with node command.
6. go to package.json, scroll under  `"scripts"` and out `"serve": "node server.js"`.
7. then, go to shell and type `npm run serve` will open the server.js file.

# Express.js

Express is a Node.js framework that helps to create node application easily.

1. go to website *npmjs.com* and search *express*. will see the details about express framework.
2. also, can go to express website at *expressjs.com*. then, go to getting started section to see the code they recommended and more on documentation.
3. to install express, go to shell type `npm i express` will see *node_modules* folder which means express has been installed. can also check on package.json that express has been included in under `"dependencies"`.
4. to create express app, go to server.js file and put some required codes to have access to express.
5. to access this website through web browser we have to declare route. can declare mutiple route. `app.get("URL path", (callback function with two parameters which are request, response) => {}`.
6. use res(response) because the server want to send something to client.

```txt
Client ——request——> Node App

Client <——respond—— Node App
```

to interact with app can use Postman or Insomnia.

1. download one of them and install. open and type *localhost:3000* will see preview about the file.

use Git to keep tracking of our code:

1. install Git Bash, click Download For Windows and click next, next until its done.
2. on shell type `git init` to use git with our project.
3. then, will see the color change in your filesystem with an icon next to them.
4. then, create a new file `.gitignore` for the files that we dont want to save in git. type *node_modules* folder and it will see the color changed to gray instead of green.
5. now on shell, type `git add .` to add every files in git.
6. next, use `git commit -m "This is a message to describe changes"` to save every files that has been chained or has been added to git.

# Install Nodemon

It monitors your project directory and automatically restarts your node application when it detects any changes.

1. on shell, type `npm i --save-dev nodemon` to install nodemon as a development dependency.
2. then, go to package.json and under `"scripts"` put `"dev": "nodemon server.js"` to use nodemon to run the server.js.
3. next, on shell type `npm run dev` to open server with nodemon.

# Connect App with Database (MongoDB, MySQL etc.)

For MongoDB:

to connect our node.js to mongodb you need to use the package name [Mongoose](https://www.npmjs.com/package/mongoose).

> The official documentation website is [mongoosejs.com](https://mongoosejs.com/).

1. go to npmjs.com, search for Mongoose. copy it and install but, have to stop the server first.
2. on terminal, type `npm i mongoose` then run again the server with nodemon.
3. use this code to connect to database. to use mongoose `const mongoose = require('mongoose')` and to use Mongoose to connect to mongodb by using connection string `mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => console.log('Connected!'));`.
4. then, lets navigate to MongoDB website

Download [MongoDB](https://www.mongodb.com/)

1. sign in or sign up MongoDB first with account.
2. create a new MongoDB account and follow the instructions. for cluster you can name it whatever you want and click Create.
3. then, on mongodb dashboard you can create a new user (admin) and password (Password1) for example and Create User.
4. then, for IP can put `0.0.0.0`. description can put whatever you want and click Add Entry.
5. Click Finish and Close to go to database. have to wait a few minutes until its finished create a database for you.
6. then, it brings you to *Atlas cloud Overview of Database Deployements*. Go to tab to check *Network Access* to make sure your IP address is similar to this `0.0.0.0/0` because we want to access to the database from our localhost.
7. go back to *Database* and then will see a visualization of your data. click on *Connect* and we want to connect it with our application so click on *Connect to your application*.
8. Select your driver and version. for driver is `Node.js` and the version is `5.5 or later`.
9. Install your driver, by run the following on the command line `npm install mongodb`.
10. then,  Add your connection string into your application code `mongodb+srv://admin:<password>@amirahapi.1cle7dd.mongodb.net/?retryWrites=true&w=majority` or also called as URI. Replace <password> with the password for the admin user. Ensure any option params are [URL encoded](https://dochub.mongodb.org/core/atlas-url-encoding).

Require mongoose:

> mongoose.connect("uri: string", options?: mongoose.ConnectOptions | undefined);

```javascript
// from
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

// to this
mongoose.connect('mongodb+srv://admin:Password1@amirahapi.1cle7dd.mongodb.net/?retryWrites=true&w=majority')

// with a collection name
mongoose.connect('mongodb+srv://admin:Password1@amirahapi.1cle7dd.mongodb.net/Node-API?retryWrites=true&w=majority')

// order of execution, at end will be like this
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
```

1. after that, go to server.js and create variable mongoose.
2. then connect to database, put `mongoose.connect('mongodb+srv://admin:Password1@amirahapi.1cle7dd.mongodb.net/?retryWrites=true&w=majority')`.
3. you can also put a collection name example `Node-API`
4. after connect we want to show messages on terminal. so, use `then` with callback function `.then(() => console.log("Connected to MongoDB!"))`
5. also, if theres an error `.catch((error) => console.log(error))`.

Order of execution (connect to database -> start app)

1. so, we move `app.listen()` because we want our application to connect to the database first before it's running.
2. this is the right way to connect to the database.

# Create a Model for Data in Database

> how to save data in database(MongoDB)?? answer: by using *Model*.
> example; if want info about a product, we create a Product Model. so, we can save info about the product in database. (product data in database will interact directly with product model in our node app).

What's inside a Product Model?

- Is a Product Schema: its to determine what type of data we have in product model.
- to save data in the database(db), we need to use Model.
- example; lets create Products data. inside mongodb we have Products database and inside Node App we have Products Model in order to save data in products db. so, the products data will interact directly with products model via the connection (`mongoose.connect`).

## Model

- To create Products Model need to include `mongoose` in those files. everything that interacts with db we use Mongoose
- We call `mongoose` to create a Schema. and then in Schema, we will determine each field.

## Schema

To create Products Model we need Products Schema. Schema will determine what type of data we have in products model.

- to determine data type.
- ex; to create a data products need product name, qty, price, img, timestamps. so, we need to determine what type of data are for name, qty and price.
- for name, its type is String and its required to fill.
- for qty, type is a Number (Integer), required and can put default value.
- for price, type is Number, required.
- for img, type is String and optional.
- for timestamp, its to create 2 fields createdAt and updatedAt.
- fields name can be anything.

> tips: thinking of creating a Schema as similar to setting up data in an Excel spreadsheet from scratch. Data Template: It's like a template for your data, outlining what fields are required, optional, or restricted, similar to how a form or questionnaire expects specific answers.

# CRUD

- GET retrieves data from an API.
- POST sends new data to an API.
- PATCH and PUT update existing data.
- DELETE removes existing data.

## Use a Model to Save Data in MongoDB

When we want to save something into database(mongodb), we have to use a Model.

> `req.body` is the actual data the client want to send to the server

Before:
```javascript
// importing Products Model
const Products = require("./models/productsModel");

// middleware
app.use(express.json());

app.post("/products", (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
});
```

Use Postman to send a respond in JSON format consists of *name, qty, price, image*.


After (proper way):
```javascript
// importing Products Model
const Products = require("./models/productsModel");

// middleware
app.use(express.json());

app.post("/products", async (req, res, next) => {
  try {
    const products = await Products.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
```

Then, in Postman when we send a POST request it will return the products data that had saved in MongoDB with added *timestamps*.

**Explain each line of this code for a complete beginner in simple terms:**

1. `const Products = require("./models/productsModel");`
   - This line is saying that we want to use a file called "productsModel" that is located in a folder called "models." We'll store what's in that file in a variable called "Products."

2. `app.use(express.json());`
   - Here, we are telling our application (which is using a library called Express) to use a piece of code that helps us understand data in a specific format, which is JSON. JSON is a way to structure data so that computers can understand it easily.

3. `app.post("/products", async (req, res, next) => {`
   - This line says that when someone sends a request to our server using the HTTP method POST and the URL "/products," we want to do something with it. The `async` means that the following code might take some time to run, so we use `await` later on.

4. `try {`
   - We are starting a section of code that might encounter errors, and we want to try running it. If anything goes wrong, we'll handle it in the `catch` section.

5. `const products = await Products.create(req.body);`
   - Here, we are creating a new variable called "products." We're using the "Products" we imported earlier and telling it to create something based on the data that came with the incoming request (`req.body`). This data usually contains information about a product.

6. `res.status(200).json(products);`
   - If everything went well, we're sending a response back to the person who made the request. We're saying the request was successful (status code 200), and we're sending back the "products" we created in a format that's easy for computers to understand (JSON).

7. `} catch (error) {`
   - If something went wrong in the code above (for example, if there was an error when creating the product), we're jumping into this section to handle the error.

8. `console.log(error.message);`
   - We're printing an error message to the server's console so that developers can see what went wrong. This is helpful for debugging.

9. `res.status(500).json({ message: error.message });`
   - We're sending a response to the person who made the request, saying that there was an error (status code 500). We also include a message explaining the error in a format that's easy for computers to understand (JSON).

In summary, this code is handling requests to create products in a web application. It uses the Express framework to handle the incoming data, tries to create a product, and sends back either the product or an error message depending on whether it was successful.

## GET Data from MongoDB

**GET - all data**

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

**GET - individual data**

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

## Update or Edit Data in Database

## Remove or Delete Data from Database