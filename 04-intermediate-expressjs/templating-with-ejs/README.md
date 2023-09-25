# Templating with EJS

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