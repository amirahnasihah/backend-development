- [Intermediate Express.JS](#intermediate-expressjs)
  - [Section 3 Notes](#section-3-notes)
    - [Separation of Concerns](#separation-of-concerns)
    - [A standard express app](#a-standard-express-app)
    - [Using Routers](#using-routers)
    - [Using Controllers](#using-controllers)
    - [Templating with EJS](#templating-with-ejs)
    - [Setting up express for EJS](#setting-up-express-for-ejs)
    - [Handing Secrets](#handing-secrets)
  - [Project 1: Weather app](#project-1-weather-app)
- [Assignment 3 - Creating Complex APIs](#assignment-3---creating-complex-apis)

# Intermediate Express.JS

## Section 3 Notes

### Separation of Concerns

- Separation of concerns is a software architecture principle which states that one area of a project shall only be responsible for a singular task.

- Following this we will look at splitting our express project into 2 main components for now, “controllers” and “routers”.

| Routers  | Controllers  |
|:-:|:-:|
| Routers will dictate what functions are executed when a certain route is hit | Controllers are the functions which are called when a route is hit, this is what actually contains the functionality and core logic |

### A standard express app

- Get started with `npm init —y`
- Install the required packages: `npm i express`
- Create a new file called “`server.js`”
- Create a route on “`/`” which returns a message

```javascript
const express = require("express");
const app = express();

app.use(express.json());

app.route("/").get((req, res) => {
    res.json({ msg: "Hi!" });
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});
```

### Using Routers

- Let’s take the original app and make it follow separation of concerns, to start off create a folder called “routes”, this folder would contain all the files pertaining to the routing logic in our express apps.
- Create a file called “`index.js`” in it.

- Instantiate a router and move the routing logic from “`server.js`” to “`index.js`”

```javascript
const { Router } = require("express");
const router = Router();

router.route("/").get((req, res) => {
    res.json({ msg: "Hi!" });
});

module.exports = { router };
```

- Import the router into “`server.js`” and link it to the app.

```javascript
const { router } = require(“./routes”);
…
app.use("/", router);
```

### Using Controllers

- Let’s now separate the logic of what happens when the route is triggered into a controller, create a folder called “controllers” and create a file called `index.js` in it.

- Move the controller logic for the root route to a function in the controller file.

```javascript
const getRoot = (req, res) => {
    res.json({ msg: "Hi!" });
};

module.exports = { getRoot };
```

- Import the controller into the router and replace the function in “`.get`” with the one we declared.

```javascript
const { Router } = require("express");
const { getRoot } = require("../controller");
const router = Router();

router.route("/").get(getRoot);

module.exports = { router };
```

### Templating with EJS

> **Angle brackets**, sometimes known as chevrons, are a pair of punctuation marks that take the form of `<` and `>`

1. EJS is a templating engine which is very minimalistic and easy to pick up because of how well it resembles HTML.

2. An EJS file has a “`.ejs`” extension and follows the same syntax as HTML.

3. The “`<% %>`” tag is used to house JS logic that we do not want to render but execute, example: `for` loops, `while` loops, higher order array methods etc.

4. `<%= %>` is used to house JS logic or variables that you want to render/show on the page.

### Setting up express for EJS

- To add EJS template support to express we need to install the “ejs” package, `npm i ejs`.

- Create a directory called “views” this is the folder which will contain all the templates.

- In ”server.js” we need to set the template engine and the assign the directory containing the templates.

```javascript
const express = require("express");
const path = require("path");
const router = require("./routes");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use("/", router);
app.listen(3000, () => {
    console.log("server running on port 3000");
});
```

- To render a template use the “res.render” method where the first param is name of the template and second param is an object containing the variables needed by the template.

```javascript
res.render(“templateName”, { …variables });
```

### Handing Secrets

> custom Error Handler to handle info that are importants such as password or env variable.

- Working with backend applications we would often find ourselves holding several important secrets and its important secrets and its of paramount significance that we keep those secrets secure and unattainable to the regular user, and dont accidentally leak them.
- Secrets should never be in the actual code, and the code should borrow them from an external file, which is not a part of the actual application, and they can be exposed to the application through a utility.
- Traditionally, it is done by adding a ".env" file which contains the secrets.
- This also includes making sure that the secrets never make it to any sort of staging environment in our Version Control System. This commonly involves adding the secrets file to ".gitignore".

```env
# SECRETS.ENV file

FOO_SECRET = "foo_secret"
BAR_SECRET = "bar_secret"
```

```javascript
// config.js

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, "../" )});

module.exports = { ...process.env };
```

## Project 1: Weather app

**Weather app**

- Using the OpenMeto and OpenCage API create an app that takes a location and gives the weather forecast the app will have the following paths
- “/“ - landing page for the app
- “/forecast“ weather forecast for the location passed in query string “q”.

# Assignment 3 - Creating Complex APIs