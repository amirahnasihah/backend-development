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

