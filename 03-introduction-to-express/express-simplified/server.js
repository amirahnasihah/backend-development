/* source: https://www.youtube.com/watch?v=SccSCuHhOw0 */
const express = require("express");
const app = express(); // to setup actual server (npm run devStart)

/* View Engine */
app.set("view engine", "ejs");
// app.use(logger);

/* Route handler for a GET request (http method)
app.get(path, request, response, next) for setup a route
*/
app.get("/", (request, response) => {
  console.log("Here is a GET request");
  // response.sendStatus(500); // to send status
  // response.status(500).send("Hello"); // to send status and with message
  // response.send("Hello, world!"); // sending info to user (display ob browser)
  // response.status(500).json({ message: "Error" }); // using this inside of some type of api and to send json to client

  // response.download("server.js"); // send file to user to download
  response.render("index", { text2321: "World" }); // to render a file + object parameter
});

/* Router - to create another instance of your application that is its own little mini application that has all of its own logic, let's all the code related to our users and put that inside of its own file `routes`:

app.get("/users", (req, res) => {
  res.send("User list");
});

app.get("/users/new", (req, res) => {
  res.send("User new form");
});
*/
const userRouter = require("./routes/users");
app.use("/users", userRouter);

/* Middleware
- if you have a middleware that you want to use everywhere on all of your routes always define it at the very top of your page
*/
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000); // to start and run server at localhost 3000 (server initialized)
