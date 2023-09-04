const express = require("express");
const router = express.Router();

/* GET request */
router.get("/", (req, res) => {
  res.send("User list");
});

// static, always put it above dynamic routes.
router.get("/new", (req, res) => {
  res.send("User new form");
});

/*
- POST request - can put in different file.
- Express read from top to bottom.
- that's static make sure you always put it above your dynamic routes.
*/
router.post("/", (req, res) => {
  res.send("Create User");
});

/*
Another method called the `route`. To pass the path and chain together all http request.
- kind of cleans up the code.
*/
router
  .route("/:userId")
  .get((req, res) => {
    console.log(req.user);
    // it's pulling that number directly from url
    res.send(`Get User with ID ${req.params.userId}`);
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.userId}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.userId}`);
  });

// Advanced Routing - dynamic parameter. ex; user's id
router.get("/:userId", (req, res) => {
  // it's pulling that number directly from url
  res.send(`Get User with ID ${req.params.userId}`);
});

/* PUT request */
router.put("/:userId", (req, res) => {
  res.send(`Update User with ID ${req.params.userId}`);
});

/* DELETE request */
router.delete("/:userId", (req, res) => {
  res.send(`Delete User with ID ${req.params.userId}`);
});

/* `.param` + middleware

- this function is going to run any time it finds a param that matches the name you pass in.
- saying hey whenever you find a parameter with the name of id i want you to run this function and this function is going to take `request`, `response`, `next` property and take the value of the thing in our case the `id` itself
*/
const users = [{ name: "Ludwig" }, { name: "Tchaikovsky" }];
router.param("userId", (req, res, next, userId) => {
  console.log(userId);
  req.user = users[userId];
  next();
});

module.exports = router;
