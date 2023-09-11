- [Project Setup](#project-setup)
- [Server Setup](#server-setup)
- [Basic Routing](#basic-routing)
- [Sending Data](#sending-data)
- [Rendering HTML](#rendering-html)
- [Routers](#routers)
- [Advanced Routing](#advanced-routing)
- [Middleware (basic concept)](#middleware-basic-concept)
- [Rendering Static Files](#rendering-static-files)
- [Parsing From/JSON Data](#parsing-fromjson-data)
- [Parse Query Params](#parse-query-params)

🐥 source: [Learn Express JS In 35 Minutes](https://youtu.be/SccSCuHhOw0?si=ugSDtUagHm5pEFkm)

# Project Setup

> install node

1. `npm init -y` will create *package.json* file and this is to install all our different libraries we're going to use.
2. `npm i express` will create node_modules file and to install the express library.
3. `npm i --save-dev nodemon` to easily restart our server anytime we make changes.
4. then, to set up go to package.json file create a `"scripts":` called `{"devStart": "nodemon server.js"}`. `server.js` is a file to put all of our server code if we run the command `npm run devStart`.
5. run the command `npm run devStart`  to run all the code in our server.js.

# Server Setup

1. go to server.js file, we need to require that express library type `const express = require("express")`
2. then, create variable to setup actual server `const app = express()`. calling express as a function we create an application which allows us to set up our entire server.
3. `app.listen(3000)` to make our server actually run by pass it in a port number. say here our server is listening on port 3000 for a bunch of different requests. it will shows *cannot get /* means that our application doesn't have any routes setup.
4. `app.get` to setup a route, we can call http different methods.

# Basic Routing

1. to make a get request for the url at slash `"/"`.
2. `app.get("/", (req, res, next)){}` so the way this function works is the first parameter you pass to is `"/"`, a root path.
3. then the second parameter is a function and takes 3 different parameters (`req`, `res`, `next`).
4. `res.send("Hello, world!")` will display on browser. to send data back down to the user  along with our response "Hello, world!". `console.log("Here")` will print Here in console. to access this '/' url.
5. `res.send()` is not going to use very often, it's great for testing purposes.

# Sending Data

1. `res.sendStatus(500)` will display *Internal Server Error*. to send status and pass in http status code. 500 means there is an error on our server.
2. `res.status(500).send("Hi")` will display Hi but on console will print code 500 error message. so, can chain together statuses with others such as sending down a text string or more commonly send down some json.
3. `res.status(500).json({message: "Error to get json"})` will display actual json code {"message":"Error to get json"} but on console will print code 500 error message.
4. `res.json({message: "Error"})` will display json code but on console will print no error message because by default the status is a successful 200 status.
5. `res.download("server.js")` will pop up a information for me/user to download `server.js` file directly to hard drive. we pass it the path to the file we want.

# Rendering HTML

Rendering file

1. `res.render("index")` use the `render` method and then you pass it the path to the file that you want to render. to set up our application to actually work, we need to tell our app where these files are and by default *all of your view files* are going to live inside of the folder called *views*
2. create views folder. inside folder, create `index.html` file and put some html codes. save and refresh will see that actually nothing works like we wanted. will display an *error that just says no default engine was specified and no extension was provided*. this is because no view engine setup, so we using `ejs` as our view engine, not `pug`.
3. `npm i ejs` to be for our view engine.
4. then, go to `serve.js` file to tell our application to use that view engine.
5. `app.set('view engine', 'ejs')` to set a variable so the first, we pass in is the name of the setting which in our case is *view engine* and then we need to pass it in the view engine we're using which is *ejs*.
6. rename `index.html` to `index.ejs`. `res.render("index")` save and refresh will display Hello. that Hello being sent down to user by just passing in `render`.
7. `res.render("index", { text: "World" })` can pass information from your server (server.js) down into the views (views files) and to do that is this render takes a second parameter which is an *object*.
8. inside views `index.ejs`, we put `<%= %>` to access information from server and display that info to browser.
9. `<%= locals.text %>` will display World. `locals` always going to be defined but `text` will just be undefined. to access the text property.

# Routers

> different ways to render out content to the screen. endering jJSON which is really common for APIs. rendering HTML which is going to be common for a full stack web application.

- if have hundreds of different routes in our application this file would become huge and really difficult to deal.
- router is a way for you to create another instance of your application that is its own little mini application that has all of its own logic applied to it and can insert it into main application.
- more sense if we took all the code related to our users and put that inside of its own file that way it's kind of encapsulated in its own area it all is in its own section and we can just kind of import that into our main application.

1. want create two simple routes. create a folder called *routes*. inside it, create a file *users.js* to contain all the routes for our user file.
2. inside *users.js* file, import express `const express = require('express')`.
3. then, put a router `const router = express.Router()`. variable router same as variable app in server .js file.
4. first, `router.get('/users', (req, res, next)){}`. to list out all of users.
5. second, `router.get('/users/new', (req, res, next)){}`. to generate a new user form.
6. change them to `router.get('/', (req, res, next)){}` and `router.get('/new', (req, res, next)){}`. because we can nest it inside of a parent route.
7. `module.exports = router` to use this users router. we export this router from this users file to be used in the server.js file
8. then, `const userRouter = require("./routes/users")` to import users router into our server and the file we require `users.js`.
9. next, `app.use("/users", userRouter)` to link up these users routes into our main app to a particular path. so first, pass actual path (a starter path) second, pass our router (user router).

# Advanced Routing

# Middleware (basic concept)

> `param`: is one version of middleware.
> middleware is code that runs between the starting of the request and the ending of the request so a really common type of middleware that you might want to create is a middleware for logging out something.
> every single piece in middleware takes `request`, `response` and `next`.
> commonly you only ever really see `next` when creating middleware.
> middleware runs from top to bottom

```javascript
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
```

1. inside `server.js` file, create function called `logger(req, res, next)`.
2. `console.log(req.originalUrl)` to print out the url that this request comes from.
3. then, call `next()` function. remember: req,res,next is a function arguments.
4. `app.use(logger)` to use this middleware, we pass it in the `logger` function that we want to use.
5. save and refresh. on url *`http://localhost:3000/users/1`* will display *Get User with ID 1* but, in console print it out the url of `/users/1` and shows the json `{name: 'Tchaikovsky'}`.
6. if we go to main page *`http://localhost:3000/`* will display Hello but, in console print it out the url `/`.
7. its printing out that url and it's doing it on every single request (refresh).
8. start at the top of our page. then, first middleware we insert is `logger()`. then, we create `app.get()` request. next, we set up our router for our users. so, everything comes after this `logger` middleware.
9. if have a middleware that you want to use everywhere on all of your routes always define it at the very top of your page.
10. if don't want to use everywhere you can use it on individual endpoints.

if middleware don't want to be used everywhere, you can use it on individual endpoints:

1. in `server.js`, remove `app.use(logger)`. now, no login anywhere.
2. `app.get('/', logger, (req, res))` will run our `logger` and then it's going to run this function `next`. this `logger()` is only going to work on this `app.get()` here. to do that we can just pass multiple functions to `app.get()`.
3. `app.get('/', logger, (req, res))` shows if we go to our slash `/` page it prints out our login of slash `/` but if we go to anywhere else such as users page it doesn't print anything in the console and that's because this `logger()` is only on this `app.get()`.

Multiple middlewares:

1. `app.get('/', logger, logger, logger, (req, res))` could put as many pieces of middleware in here as you wanted to and all three of them are going to run in order.
2. it should print out slash `/` 3 separate times.

Middleware apply to individual routes or individual endpoints:

1. move the `logger()` middleware into the router for users.
2. inside `users.js`, then at the top `router.use(logger)`
3. if go to go to `/users` it logs it out slash user slash one but, if go to the home page `/` it doesn't log anything out and that's because this `logger` is only defined inside of the *user router*.

# Rendering Static Files

> static files things like static html css or javascript that you want to serve to the user

1. go to `app.get()` inside the server.js file that are rendering the `index.ejs` file of the views folder.
2. create a folder public, rename `index.ejs` to `index.html`. then, move `index.html` into public folder.
3. remove `app.get()` that rendering index file and put `index.html` only have body Hello World.
4. put `app.use(express.static("public"))` inside server.js to use this middleware which is `express.static(public)` function that pass it in the name of the folder where all of our static files are in, *public*.
5. if refresh the browser, will display Hello World. Example, create a test folder inside folder public and create tt.html that have random text. then, navigate to that page *localhost:3000/test/tt.html* will allow to access that file directly from the public folder. this is handy way to render static html or css or javascript.

# Parsing From/JSON Data

> built-in middleware for parsing all the info sent to your server from like forms or JSON requests

1. inside users.js, and `router.get("/new", (req, res)) => {res.render("users/new")}` here to render a form and going to render this page *users/new*.
2. go to views folder and create `users/new.ejs` file. so, its in the users folder called new.ejs.
3. inside new.ejs, put in the code of creating a form and `<form action="/users" method="POST">...</form>` on the form our action is going to be making a post request to /users and inside users.js file here you can see we have a post (`router.post("/", (req, res) => {res.send("Create User")})`) that goes to /users which right now just sends out Create User.
4. inside new.ejs, also have `<input />` that has type of text, name is firstName and `value="<%= locals.firstName %>"` a value that's set to `locals.firstName`. so, we can put in a placeholder value that starts out firstName which is Test. example, in users.js `router.get("/new", (req, res, next) => {res.render("users/new", { firstName: "Test" })})`. *< the firstName "Test" is a placeholder in input form >*
5. then, if navigate to *localhost:3000/users/new* will display the First Name and Test as placeholder input with submit button. but, if remove the firstName value `router.get("/new", (req, res, next) => {res.render("users/new")})` when refresh the page it display a blank.
6. Now, if type other first name like Kyle and click submit. it will shows Create User (nav to /users) because its doing this *post* (router.post()) *<it goes to post when submit form as the method for form is POST, in new.ejs>*

> want to access that variable that just posted to the server from the form,  `app.use(express.urlencoded({ extended: true }))`:

1. in users.js we have our request, we can access the body of that request `req.body.firstName` thats because *inside new.ejs we have this input a name of firstName* in views/users/new.ejs. so, whatever name your input has is going to match directly to whatever you get on the body.
2. lets just, `console.log(req.body.firstName)` and say `res.send("Hi from users.js post req")` in users.js
3. then, go back to *localhost:3000/users/new* and type random text and click submit. we will get error says *cannot read property firstName of undefined*, we not be able to access the body at all.
4. that is because by default express not allow to access body. we need middleware to do that.
5. go to server.js and put `app.use(express.urlencoded({ extended: true }))` and pass an object that haa extended set to true. this is just a spoiler plate code.
6. then, refresh again the page will print out the placeholder value of firstName.

few code to emulate real world situation:

1. go to users.js in `router.post()` say `const isValid = true`. this just a variable to see if different scenarios work for what happens when we have a valid response and invalid.

```javascript
const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName})
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log("Error")
    res.render("users/new", { firstName: req.body.firstName })
  }
```

1. a variable to see if different scenarios work for what happens when we have a valid response and invalid.
2. so, if this is a valid request, we want to create our user. so, can just say users (the array of object data), with all of our users we are going to push in a new user and that new user is going to have a firstName which is coming from `request.body.firstName`.
3. then, after created new user we want the page to redirect the user to the get page. say `response.redirect`, and redirect just change the url completely. so, the page redirect to `/users/${the id of the last user added which is the new user}`.
4. next, in else statement just console.log error. then, can re-render that form say `res.render(we want to go to users/new)` and we want to pass down the firstName that they tried to create this with request.body.firstName. why do this?? *minute 34:00*

> posting JSON information to the server:

1. put `app.use(express.json())` inside server.js, its for whenever we make a json request like making a fetch from the client to the server or calling an APIs this allow to parse json information from the body.

# Parse Query Params

> when have to deal with query parameters:

1. example, in search bar browser we put query parameter that says `localhost:3000/users?name=Kyle` and enter