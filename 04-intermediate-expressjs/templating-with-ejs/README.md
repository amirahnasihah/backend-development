- [Templating with EJS](#templating-with-ejs)
  - [Dynamic applications](#dynamic-applications)
- [dotenv.config](#dotenvconfig)
  - [`dotenv.config({ path: path.resolve(__dirname, "../.env") })`](#dotenvconfig-path-pathresolve__dirname-env-)
- [EJS Tags](#ejs-tags)

# Templating with EJS

Installed dependencies:

> [node.js documentation](https://nodejs.org/api/path.html)

- express
- nodemon
- dotenv
- ejs

> **Angle brackets**, sometimes known as chevrons, are a pair of punctuation marks that take the form of `<` and `>`

1. EJS is a templating engine which is very minimalistic and easy to pick up because of how well it resembles HTML.

2. An EJS file has a “`.ejs`” extension and follows the same syntax as HTML.

3. The “`<% %>`” tag is used to house JS logic that we do not want to render but execute, example: `for` loops, `while` loops, higher order array methods etc.

4. `<%= %>` is used to house JS logic or variables that you want to render/show on the page.

## Dynamic applications

> how to use JSON objects and arrays as dynamic values in EJS templates

**index.controller.js:**

```javascript
// to use JSON objects and arrays as dynamic values in EJS templates
const profileRoute = (req, res) => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    posts: [{ title: "Post 1" }, { title: "Post 2" }, { title: "Post 3" }],
  };

  // we pass the ".ejs" file and the data that we want to render to the browser.
  res.render("profile", { user });
};
```

**profile.router.js:**

```javascript
router.route("/profile").get(profileRoute);
```

**profile.ejs:**

- i tried two ways to list out the posts: `for` loop and `map()` method.

```ejs
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
  </head>

  <body>
    <h1>User Profile</h1>
    <!-- to use the data that we want, take the arguments that we passed before, "user" -->
    <p>Name: <%= user.name %>
    </p>
    <p>Email: <%= user.email %>
    </p>

    <h2>Recent Posts</h2>
    <ul>
      <% for (let i=0; i < user.posts.length; i++) { %>
        <li>
          <%= user.posts[i].title %>
        </li>
        <% } %>
    </ul>

    <!-- map() method -->
    <p>map() Method:</p>
    <ul>
      <% user.posts.map((p)=> {%>
        <li>
          <%= p.title %>
        </li>
        <% }) %>
    </ul>
  </body>

</html>
```

# dotenv.config

> source: [npmjs/config](https://www.npmjs.com/package/dotenv)

As early as possible in your application, import and configure dotenv:

```javascript
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working
```

In ReactJS:

```env
REACT_APP_CHANGE_ME=CHANGE_ME
```

```javascript
const ENV_VAR = process.env.REACT_APP_CHANGE_ME;
```

## `dotenv.config({ path: path.resolve(__dirname, "../.env") })`

The code `dotenv.config({ path: path.resolve(__dirname, "../.env") });` is a configuration statement that sets up the `dotenv` library to load environment variables from a specific `.env` file in a Node.js application. Here's what it does step by step:

1. `dotenv` is a Node.js library commonly used to load environment variables from a `.env` file into the application's process environment (`process.env`).

2. `dotenv.config()` is a method provided by the `dotenv` library that loads the environment variables from a specified `.env` file. It reads the file, parses its contents, and sets the key-value pairs as environment variables.

3. `{ path: path.resolve(__dirname, "../.env") }` is an **object passed as a configuration parameter** to `dotenv.config()`. It takes an object as an argument with a `path` property that specifies the path to the `.env` file to be loaded. It specifies the path to the `.env` file that should be loaded.

   - `path.resolve(__dirname, "../.env")` constructs an absolute file path to the `.env` file. Here's what's happening within `path.resolve`:
     - `__dirname` is a built-in Node.js variable that represents the directory name of the current module (the JavaScript file where this code is located), in our case *secrets.js*.
     - `path.resolve()` combines `__dirname` with `"../.env"` to create an absolute file path to the `.env` file that is located one directory level above the current module.

So, when you run this code, it sets up the `dotenv` library to load environment variables from the `.env` file located one directory level above the current module, ensuring that those variables are available for the rest of your Node.js application.

# EJS Tags

- `<%`: 'Scriptlet' tag, for control-flow, no output
- `<%_`: 'Whitespace Slurping' Scriptlet tag, strips all whitespace before it
- `<%=`: Outputs the value into the template (HTML escaped)
- `<%-`: Outputs the unescaped value into the template
- `<%#`: Comment tag, no execution, no output
- `<%%`: Outputs a literal '<%'
- `%>`: Plain ending tag
- `-%>`: Trim-mode ('newline slurp') tag, trims following newline
- `_%>`: 'Whitespace Slurping' ending tag, removes all whitespace after it