> separation of concerns

# Separation of Concerns

- (req, res) => {..} is a controller.
- router.route("/").get() is a router.

# Routers

# Abstracting Controllers

- contains all the core logic that gives the whole flow of application

# Handling data payloads in requests

> Sending Data in POST, PUT and PATCH

- when creating our applications we would often have to deal with also taking data from the user.
- how? the way to do that is by using the "body" property in the request object, `req.body` in our case, would contain the values which were sent to the backend by the user in form of an object.
- to actually make use of body in our application, we need to enable the express body parser in the app using `express.json()`.

```javascript
const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
```

- After adding the body parser, we would be able to use the `req.body` property in any controller

```javascript
const fooController = (req, res) => {
  const { ...propNames } = req.body;
}
```

- In order to send off this request we cannot do that in Chrome so easily. Instead, recommend to install "Insomnia", its a REST client.
- For `Number`, we dont have to explicitly state the number when sending a POST request.
- This is because these aren't actually strings to begin with.

# A practical example of CRUD routes

- We want to create a CRUD routes for users but now we don't have a database. Instead, just create an empty array called "users" to store data temporarily.
- The structure that we want inside the object would be `{ id, name, age}`.

## CRUD without uses of Database

CREATE

GET ALL

GET BY ID

DELETE

UPDATE

```javascript
// {id, name, age}
let users = [
  {
    id: 10,
    name: "Jane Smith",
    age: 30,
  },
  {
    id: 11,
    name: "Bob Smith",
    age: 40,
  },
];

/* GET */
const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const { id } = req.params;
  // u is the user. basically, we want to find the user with a matching id.
  const user = users.find((u) => {
    return u.id === Number(id);
  });
  if (!user) return res.json({ error: "User not found" });
  res.json(user);
};

/* CREATE */
const createUser = (req, res) => {
  const { id, name, age } = req.body;
  // if no id, name and age we return error.
  if (!id && name && age) return res.json({ error: "bad request" });

  const user = { id, name, age };
  // duplicacy check.
  if (users.find((u) => u.id === id))
    res.json({ error: "User already exists" });
  // otherwise, we add the user to the array.
  users.push(user);
  // and we return the user.
  res.json(user);
};

/* DELETE */
const deleteUserById = (req, res) => {
  const { id } = req.params;
  // we'll copy the user which is about to be deleted, so users.find() and make sure it's Number ID.
  const user = users.find((u) => u.id === Number(id));
  if (!user) res.json({ error: "User doesn't exist" });

  // we'll filter so that user.id is not equal to ID. this to make sure that the user gets deleted.
  users = users.filter((u) => u.id !== Number(id));
  res.json(user);
};

/* UPDATE */
const updateUserById = (req, res) => {
  const { id } = req.params;
  // we find the user first.
  const user = users.find((u) => {
    return u.id === Number(id);
  });
  // then, check if the user doesn't exist.
  if (!user) res.json({ error: "User not found" });
  // after find and check, we'll filter the user.
  users = users.filter((u) => u.id !== Number(id));

  // otherwise, update the user. we'll spread the user and then spread the request.body.
  // this will take all the user fields but it will also update the user fields with anything being added by the body.
  const updatedUser = {
    ...user,
    ...req.body,
  };
  users.push(updatedUser);
  res.json(updatedUser);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
};
```