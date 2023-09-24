- [Initial Step](#initial-step)

Things to install:
1. node.js `node -v`
2. express.js `npm i express`
3. nodemon `npm i nodemon -D`
4. download postman
5. download git bash

# Initial Step

1. install nodejs (LTS version), on terminal check if its installed `node -v`.
2. create a new folder. open terminal, type `npm init -y` created *package.json* file.
3. create new file *server.js* for all the backend codes here.
4. in *package.json*, add `"serve": "node server.js"` under the  `"scripts"`.
5. install express `npm i express` and *node_modules* folder appeared.
6. inside *server.js* file, put recommended expressjs codes to have access to the server.
7. on terminal, type `npm run serve` opens up the *server.js* file.
8. interact node api app with Postman or Insomnia.
9. install git to track codes. on terminal, type `git init` and color changed green.
10. add `.gitignore` file and put *node_modules* folder inside it so color changed gray.
11. on terminal, type `git add.` to add all files.
12. then, type `git commit -m "msg description"` to save the files.
13. install nodemon `npm i nodemon -D` as a dev dependency.
14. on *package.json*, add `"dev": "nodemon server.js"` to run nodemon with *server.js* under `"scripts"`.
15. on terminal, type `npm run dev` to open *server.js* with nodemon.
