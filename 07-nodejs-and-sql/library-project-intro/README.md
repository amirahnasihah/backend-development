- [Introduction to upcoming project, Library Management from TalentLabs](#introduction-to-upcoming-project-library-management-from-talentlabs)
- [Bootstrapping the application](#bootstrapping-the-application)
- [Defining the Book model](#defining-the-book-model)
- [Writing the Books service](#writing-the-books-service)
- [Connecting the Books routes](#connecting-the-books-routes)
- [Error Handling](#error-handling)

# Introduction to upcoming project, Library Management from TalentLabs

Dependecies:

> express, mysql2, sequelize, nodemon dev dependency, express async handler, dotenv

`npm i sequelize mysql2 express express-async-handler dotenv` && `npm i --save-dev nodemon`

# Bootstrapping the application

> express-async-handler: https://www.npmjs.com/package/express-async-handler

- setup depencies and directories structure: controllers, routes

# Defining the Book model

- ER Diagram Model (Tables: Book, User, Role)
- setup directories: models, services
- './models/index.js' for connection with the database which contains Sequelize configuration.
- declare database 'libraryApi' in MySQL Workbench. `CREATE DATABASE libraryapi;`
- define Book Model in another file './models/book.model.js'
- mysql `use libraryapi;` then, `SHOW TABLES;` will show "books" table. let's `DESC books;` to see fields detail.

# Writing the Books service

> Service is an interface between the DataBase and a Controller

- create a new folder named './services/'.

# Connecting the Books routes

# Error Handling