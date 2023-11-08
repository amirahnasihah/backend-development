- [Acquainting yourself with Express - Section 2 (Notes)](#acquainting-yourself-with-express---section-2-notes)
  - [What is a REST API?](#what-is-a-rest-api)
  - [What is Express.JS?](#what-is-expressjs)
  - [The components of an Express App](#the-components-of-an-express-app)
  - [Express Request-Response LifeCycle](#express-request-response-lifecycle)
  - [Writing our first express app](#writing-our-first-express-app)
  - [Creating our first Route](#creating-our-first-route)
- [Assignment 2 - Creating Simple APIs](#assignment-2---creating-simple-apis)
    - [ExpressJS how to](#expressjs-how-to)

# Acquainting yourself with Express - Section 2 (Notes)

> Acquainting = get familiar with ...

## What is a REST API?

- API or Application Program Interface is a piece of software that allows two or more softwares to communicate with each other. Interface is a term which means that it acts as a coupling mechanism between two software.

- An API can follow any sort of architectural paradigm, an API can simply be the tooling which is exposed to us by the OS to interact with it, it could be an API to write Graphical User Interfaces or it could be a REST Web API.

- A RESTful API uses HTTP as a transport mechanism to send data from the server to the consumer and the server performs certain actions requested by the consumer and sends over the result of those operations in the form of a HTTP Response.

- Further reading: https://en.wikipedia.org/wiki/API

## What is Express.JS?

- Express.JS is a fast, minimal and un-opinionated framework to write reliable and scalable BackEnds.

- Express.JS is not a language, but rather a framework, we use the Node.JS runtime to execute our JS code on the server.

- Express is fearlessly un-opinionated which gives us a lot of freedom at our hands to make a lot of subjective decisions about the code architecture, which makes it flexible and extremely easy to learn as you don’t have to fight with unnecessary syntax boilerplate.

- To install express we can simply initialize a new node project and install it using the following commands

```bash
$ npm init —y
$ npm install express
```

## The components of an Express App

> Routers, Middle, Controllers, Services

- **Routers**: Routers are supposed to handle what happens when a specific path has been queried to, routers are by design supposed to be “dumb”, what this means is that routers should not be making any decisions and they should only be responsible for calling the methods associated.

- **Middleware**: Middleware is a piece of code that sits between a router and the controller which can perform certain operations before a controller is ever reached, these can be used to authenticate users or serialize data.

- **Controllers**: controllers are supposed to house the core logic of the application, controllers should still not ever directly deal with database, any DB requests shall be deferred to a service.

- **Services**: A Service is supposed to be an interface between the DataBase and a Controller, it is supposed to be replaceable and implement a standard where it is very trivial of a task to swap out a service for another, it is observed that the pieces of software we need to change the most in any application are things like the database interface as the DB updates, so having plug and play services tends to help that.

**EXPLAINATION**

```markdown
An Express app is a web application built on top of the Express framework, which is a popular Node.js framework for building web applications. The components of an Express app include:

Routing: Express uses a routing mechanism to handle incoming requests and direct them to the appropriate handlers. This is typically done through the use of HTTP methods like GET, POST, PUT, and DELETE.

Middleware: Middleware is a function that is executed before the final request handler is called. It can be used to perform a variety of tasks, such as logging, error handling, authentication, and more.

Template engine: A template engine is used to render dynamic views. Express supports a number of template engines, including Pug, EJS, and Handlebars.

Database integration: Express can be used with a variety of databases, including MySQL, MongoDB, and PostgreSQL. Database integration typically involves the use of a database driver or ORM (Object-Relational Mapping) library.

Error handling: Express provides a number of error-handling mechanisms, including middleware for handling 404 errors and other common errors. Custom error handling middleware can also be written to handle specific errors.

Static file serving: Express can be used to serve static files, such as images, CSS, and JavaScript files.

Session management: Session management is a way of keeping track of user data between requests. Express provides middleware for session management, which can be used to implement features like user authentication and authorization.

Security: Express provides middleware for implementing various security measures, such as CSRF protection, XSS protection, and more. It's important to implement these measures to protect your application from attacks.
```

simple example to help you understand the components of an Express app:

```markdown
Suppose you're building a simple web application that displays a list of products. When a user visits the homepage, they should be able to see a list of products and click on each product to see more details. Here's how you could use the components of an Express app to build this application:

Routing: You can define a route for the homepage ("/") and a route for each product ("/product/:id") using the Express routing mechanism. The homepage route would handle a GET request and render a list of products, while the product route would handle a GET request with a specific product ID and render the details of that product.

Middleware: You can use middleware to handle things like parsing request bodies, logging requests and responses, and handling errors. For example, you could use the body-parser middleware to parse JSON request bodies, the morgan middleware to log requests and responses, and custom error handling middleware to handle errors.

Template engine: You can use a template engine like Pug to render dynamic views. For example, you could create a Pug template for the homepage that iterates over the list of products and displays them in a table.

Database integration: You can use a database like MongoDB to store and retrieve data about the products. You could use the Mongoose ORM library to connect to the database and define a Product schema that maps to a "products" collection in the database.

Error handling: You can use middleware to handle errors, such as a 404 middleware that responds with a "404 Not Found" message when a route is not found, or a custom error handling middleware that logs errors and responds with an appropriate error message.

Static file serving: You can use the Express static middleware to serve static files like images, CSS, and JavaScript files.

Session management: You can use the Express-session middleware to implement session management, which can be used to keep track of user data between requests. For example, you could use session management to keep track of a user's shopping cart as they navigate the site.

Security: You can use middleware to implement security measures like CSRF protection and XSS protection. For example, you could use the csurf middleware to protect against CSRF attacks, and the helmet middleware to set various security-related HTTP headers.
```

## Express Request-Response LifeCycle

In a good express application everything is split according to separation of concerns, a request first hits the router where it is decided according to which route was triggered which controller and middleware would be put to use, the middleware validate the request before the controller is triggered, the controller hosts the logic about what needs to be done with the information but the controller never interacts with the database directly, any requests to be made to the persistent data are directed to a service which in turn makes transactions on the database.

After the controller has made requests to the service the response is prepared and it goes through an interceptor which sanitizes the response before sending it back to the user.

## Writing our first express app

Given below is an example for an express application which creates a basic express server and logs when the server is live. The express function imported from express is used to instantiate a server and the listen method on the app is used to get the server to listen on a specific port.

```javascript
// import express
const express = require("express");

// instantiate the express application
const app = express();

// start the server on port 3000
app.listen(3000, () => {
    console.log("Yay! server is live!");
});
```

## Creating our first Route

- We can use the route method to register a route on the express application.

- The route method can be chained with, **“.get()”, “.post()”, “.patch()”, “.put()”, “.delete()”** methods to register what to do when a specific HTTP method is invoked on the specific route.

- The controller methods take a callback function which takes request and response as parameters (here written as `req`, and `res`), these specific objects contain data about the request sent and the response sent.

- The response object contains methods to send data back to the user who made the request, we can use **“.send()”, “.json()”, “.file()” “.render()” and “.redirect()”** to process the request.

```javascript
const express = require("express");

const app = express();

app.route("/").get((req, res) => {
    res.json({ msg: "Hi!" });
});

app.listen(3000, () => {
    console.log("Yay! server is live!");
});
```

# Assignment 2 - Creating Simple APIs

> create api without database connection

Instructions

1.	Submission guideline:
 - First you should remove the node_modules folder.
 - Secondly, compress the assignment folder into a .zip file.
 - Submit to TalentLabs learning management system.

**Task**

Create an **express app** with the following routes

a)	`“/api/:animal/”` where `“animal”` is a path parameter, when the route is visited the api should send back a response saying `“<animal> is the best!”`. For example, visiting `“/api/dog”` shall return `“dog is the best!”` (40 points)

b)	`“/api/exponent/:n/:m”` where `“n”` and `“m”` are path parameters, the api shall send back in response n^m, for example `“/api/exponent/10/2”` should return 100 (60 points)

**potential answer**

```javascript
// Importing necessary modules
const express = require("express");

// Creating the Express app
const app = express();

// Route to handle requests to /api/:animal
app.get("/api/:animal", (req, res) => {
  const animal = req.params.animal;
  res.send(`${animal} is the best!`);
});

// Route to handle requests to /api/exponent/:n/:m
app.get("/api/exponent/:n/:m", (req, res) => {
  const n = parseInt(req.params.n);
  const m = parseInt(req.params.m);
  res.send(`${n ** m}`);
});

// Starting the server
app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
```

### ExpressJS how to

1. Install Express with npm (node.js)

```bash
$ npm init —y
$ npm install express
```

2. Using CodeSandbox, in app.js file

```javascript
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Yay! server is live!");
});
```

[CodeSandbox](https://codesandbox.io/p/sandbox/strange-vaughan-6z0kvw)
