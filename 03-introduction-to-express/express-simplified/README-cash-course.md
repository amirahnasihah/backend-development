- [Project Setup](#project-setup)
- [Server Setup](#server-setup)
- [Basic Routing](#basic-routing)
- [Sending Data](#sending-data)
- [Rendering HTML](#rendering-html)
- [Routers](#routers)
- [Advanced Routing](#advanced-routing)
- [Middleware](#middleware)
- [Rendering Static Files](#rendering-static-files)
- [Parsing From/JSON Data](#parsing-fromjson-data)
- [Parse Query Params](#parse-query-params)

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

1. go to server.js, create two simple routes.
2. first, `app.get('/users', (req, res, next)){}`. to list out all of users.
3. second, `app.get('/users/new', (req, res, next)){}`. to generate a new user form

# Advanced Routing

# Middleware

# Rendering Static Files

# Parsing From/JSON Data

# Parse Query Params
