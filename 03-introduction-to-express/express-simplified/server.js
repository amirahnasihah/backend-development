const express = require("express");
const app = express(); // to setup actual server (npm run devStart)

/* View Engine */
app.set("view engine", "ejs");

/* Route handler for a GET request */
app.get("/", (request, response) => {
  console.log("Here is a GET request");
  // response.sendStatus(500); // to send status
  // response.status(500).send("Hello"); // to send status and with message
  // response.send("Hello, world!"); // sending info to user
  // response.status(500).json({ message: "Error" }); // using this inside of some type of api and to send json to client

  // response.download("server.js"); // send file to user to download
  response.render("index", { text: "World" }); // to render a file + object parameter
});

app.listen(3000); // to start and run server
