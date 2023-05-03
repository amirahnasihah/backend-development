- [Aquatinting yourself with Express](#aquatinting-yourself-with-express)
  - [Section 2 Notes](#section-2-notes)
    - [What is a REST API?](#what-is-a-rest-api)
    - [What is Express.JS?](#what-is-expressjs)
    - [The components of an Express App](#the-components-of-an-express-app)
    - [Express Request-Response LifeCycle](#express-request-response-lifecycle)
    - [Writing our first express app](#writing-our-first-express-app)
    - [Creating our first Route](#creating-our-first-route)
- [ExpressJS Basics Quiz](#expressjs-basics-quiz)
- [Assignment 2 - Creating Simple APIs](#assignment-2---creating-simple-apis)


# Aquatinting yourself with Express

## Section 2 Notes

### What is a REST API?

- API or Application Program Interface is a piece of software that allows two or more softwares to communicate with each other. Interface is a term which means that it acts as a coupling mechanism between two software.

- An API can follow any sort of architectural paradigm, an API can simply be the tooling which is exposed to us by the OS to interact with it, it could be an API to write Graphical User Interfaces or it could be a REST Web API.

- A RESTful API uses HTTP as a transport mechanism to send data from the server to the consumer and the server performs certain actions requested by the consumer and sends over the result of those operations in the form of a HTTP Response.

- Further reading: https://en.wikipedia.org/wiki/API

### What is Express.JS?

- Express.JS is a fast, minimal and un-opinionated framework to write reliable and scalable BackEnds.

- Express.JS is not a language, but rather a framework, we use the Node.JS runtime to execute our JS code on the server.

- Express is fearlessly un-opinionated which gives us a lot of freedom at our hands to make a lot of subjective decisions about the code architecture, which makes it flexible and extremely easy to learn as you don’t have to fight with unnecessary syntax boilerplate.

- To install express we can simply initialize a new node project and install it using the following commands

```bash
$ npm init —y
$ npm install express
```

### The components of an Express App

- **Routers**: Routers are supposed to handle what happens when a specific path has been queried to, routers are by design supposed to be “dumb”, what this means is that routers should not be making any decisions and they should only be responsible for calling the methods associated.

- **Middleware**: Middleware is a piece of code that sits between a router and the controller which can perform certain operations before a controller is ever reached, these can be used to authenticate users or serialize data

- **Controllers**: controllers are supposed to house the core logic of the application, controllers should still not ever directly deal with database, any DB requests shall be deferred to a service

- **Services**: A Service is supposed to be an interface between the DataBase and a Controller, it is supposed to be replaceable and implement a standard where it is very trivial of a task to swap out a service for another, it is observed that the pieces of software we need to change the most in any application are things like the database interface as the DB updates, so having plug and play services tends to help that.

### Express Request-Response LifeCycle

In a good express application everything is split according to separation of concerns, a request first hits the router where it is decided according to which route was triggered which controller and middleware would be put to use, the middleware validate the request before the controller is triggered, the controller hosts the logic about what needs to be done with the information but the controller never interacts with the database directly, any requests to be made to the persistent data are directed to a service which in turn makes transactions on the database.

After the controller has made requests to the service the response is prepared and it goes through an interceptor which sanitizes the response before sending it back to the user.

### Writing our first express app

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

### Creating our first Route

- We can use the route method to register a route on the express application.

- The route method can be chained with, “.get()”, “.post()”, “.patch()”, “.put()”, “.delete()” methods to register what to do when a specific HTTP method is invoked on the specific route.

- The controller methods take a callback function which takes request and response as parameters (here written as req, and res), these specific objects contain data about the request sent and the response sent.

- The response object contains methods to send data back to the user who made the request, we can use “.send()”, “.json()”, “.file()” “.render()” and “.redirect()” to process the request.

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

# ExpressJS Basics Quiz

> ℹ️ This is an online material. Please download and read the [online exercise guide](https://prod-public-lms-sg.s3.amazonaws.com/Online+Exercise+Guide.pdf) before starting.

Progress: DONE✅️

# Assignment 2 - Creating Simple APIs

