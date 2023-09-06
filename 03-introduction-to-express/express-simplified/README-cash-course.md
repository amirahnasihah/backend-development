# Project Setup

> install node

1. `npm init -y` will create *package.json* file and this is to install all our different libraries we're going to use.
2. `npm i express` will create node_modules file and to install the express library.
3. `npm i --save-dev nodemon` to easily restart our server anytime we make changes.
4. then, to set up go to package.json file create a `"scripts":` called `{"devStart": "nodemon server.js"}`. `server.js` is a file to put all of our server code if we run the command `npm run devStart`.
5. run the command `npm run devStart`  to run all the code in our server.js.

# Server Setup