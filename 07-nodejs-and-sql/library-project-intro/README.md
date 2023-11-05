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

> Service is an interface between the DataBase and a Controller.
> All of database related logics goes to a Service.

```javascript
// operations that wants to perform in books:
// find books
// find book by id
// handle borrowing logic
// create a new book
// CRUD operations


```

```javascript
// findBookByIdAndUpdate(id, body) is async function that takes id and body.
// book variable is equal to await findBookById.
// loop thru the new body and then set all of the properties on this book. `const key of Object.keys(body)` will gives an array of all the keys of the object which contained in body.
// then, set book. like the on book to bodies value and if it doesnt exist we just use book[key]. `??` is nullidge coalescence operator. (ex; if the body contained null values `{ username: null }` which be a bad value). so, instead using null it will go back to whatever was previously being used.
// after done resetting all fields we saved the book.
// then return that new book.
const findBookByIdAndUpdate = async (id, body) => {
  const book = await findBookById(id);
  
  for (const key of Object.keys(body)) {
    book[key] = body[key] ?? book[key];
  };
  await book.save();
  return book;
};
```

- create a new folder named './services/'.

# Connecting the Books routes

- test the libraryapi of Books, go to Postman.
- method POST, "localhost/api/books"

# Error Handling