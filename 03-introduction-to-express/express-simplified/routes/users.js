const express = require("express");
const router = express.Router();

/* using middleware into router */
router.use(logger);

/* GET request */
router.get("/", (req, res) => {
  res.send("Users list");
});

// static, always put it above dynamic routes.
/* Parsing From/JSON Data */
router.get("/new", (req, res) => {
  // res.send("User new form");
  res.render("users/new", {firstName: "Test"})
});

/*
- POST request - can put in different file.
- Express read from top to bottom.
- that's static make sure you always put it above your dynamic routes.
*/
router.post("/", (req, res) => {
  // res.send("Create User");
  console.log(req.body.firstName)
  res.send("Hi from users.js post req")
});

/*
Another method called the `route`. To pass the path and chain together all http request.
- kind of cleans up the code.
*/
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user); // print id ludwig,tchai
    // it's pulling that number directly from url
    res.send(`Get User with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });

// Advanced Routing - dynamic parameter. ex; user's id
router.get("/:id", (req, res) => {
  // it's pulling that number directly from url
  res.send(`Get User with ID ${req.params.id}`);
});

/* PUT request */
router.put("/:id", (req, res) => {
  res.send(`Update User with ID ${req.params.id}`);
});

/* DELETE request */
router.delete("/:id", (req, res) => {
  res.send(`Delete User with ID ${req.params.id}`);
});

/* `.param` + middleware

- this function is going to run any time it finds a param that matches the name you pass in.
- saying hey whenever you find a parameter with the name of id i want you to run this function and this function is going to take `request`, `response`, `next` property and take the value of the thing in our case the `id` itself
*/
const users = [{ name: "Ludwig" }, { name: "Tchaikovsky" }];
router.param("id", (req, res, next, id) => {
  // console.log(id); // print id 0,1
  req.user = users[id];
  next();
});

/* Middleware - logger()
 */

function logger(req, res, next) {
  console.log("logger:", req.originalUrl); // print url path
  next();
}

module.exports = router;
