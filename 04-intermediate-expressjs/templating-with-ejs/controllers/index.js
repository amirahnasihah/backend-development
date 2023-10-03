/* INDEX */
const indexRoute = (req, res) => {
  // res.send("hi!!");
  // "index" name should be same as "index.ejs" views name.
  res.render("index", { title: "Hi there!" });
};

/* // self experiment. on how to use JSON objects and arrays as dynamic values in EJS templates // */
const profileRoute = (req, res) => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    posts: [{ title: "Post 1" }, { title: "Post 2" }, { title: "Post 3" }],
  };

  // we pass the ".ejs" file and the data that we want to render to the browser.
  res.render("profile", { user });
};

module.exports = { indexRoute, profileRoute };
