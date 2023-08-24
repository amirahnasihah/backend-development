const express = require("express");
const app = express(); // to setup actual server

// Route handler for a GET request
app.get("/", (request, response) => {
  console.log("Here is a GET request");
  // response.sendStatus(500); // to send status
  response.status(500).send("Hello"); // to send status and with message
  // response.send("Hello, world!"); // sending info to user
});

app.listen(3000); // to start and run server
