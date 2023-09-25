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