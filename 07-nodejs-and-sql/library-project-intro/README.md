- [Introduction to upcoming project, Library Management from TalentLabs](#introduction-to-upcoming-project-library-management-from-talentlabs)
- [Bootstrapping the application](#bootstrapping-the-application)
- [Defining the Book model](#defining-the-book-model)
- [Writing the Books service](#writing-the-books-service)
- [Connecting the Books routes](#connecting-the-books-routes)
- [Error Handling](#error-handling)

# Introduction to upcoming project, Library Management from TalentLabs

Dependencies:

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

First phase of book.service.js:

```javascript
// book.service.js //
const { Book } = require("../models");
// operations that wants to perform in books:
// find books
// find book by id
// handle borrowing logic
// update
// delete
// create a new book■

// CRUD operations
// createNewBook() function takes the bosy of the book as its parameter
// spread the body and return the promise of it
const createNewBook = (body) => {
  return Book.create({ ...body });
};

const findManyBooks = (searchParam) => {
  return Book.findAll({ where: { ...searchParam }});
};

const findBookById = (id) => {
  return Book.findByPk(id);
};

const findOneBook = (searchParam) => {
  // all these `return` just returning promises. so, doesnt need `await` since its just directly returning.
  return Book.findOne({ where: { ...searchParam }});
};

const findBookByIdAndUpdate = async (id, body) => {
  const book = await findBookById(id);
  
  for (const key of Object.keys(body)) {
    book[key] = body[key] ?? book[key];
  };
  await book.save();
  return book;
};

const findBookByIdAndDelete = async (id) => {
  const book = await findBookById(id);
  
  await book.destroy();
  return book;
};
```

```javascript
// book.service.js //
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

POST:
- method POST, "localhost/api/books", inside JSON body put `{ "title": "Book", "author": "Arthur" }`, SEND POST request will display the data of that new book.
```javascript
const createBookHandler = asyncHandler(async (req, res) => {
  try {
    console.log("create new book");
    const { title, author } = req.body;
    const book = await createNewBook({ title, author });
    res.status(201).json(book);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
```

GET:
- method GET, "localhost/api/books?title=Book&author=Arthur", Send GET request will display the list of all books info searched based on query given.
```javascript
const getManyBooksHandler = asyncHandler(async (req, res) => {
  // we spread `...req.query` to search for query string "localhost/api/books?title=Book&author=Arthur"
  const books = await findManyBooks({ ...req.query });
  res.json(books);
});
```

UPDATE:
- method PATCH, "localhost/api/books/:id", copy ID from any books data and paste into `:id`, inside JSON body put `{ "title": "Book Two", "author": "Author Two" }` to change the book info, Send PATCH request will display the list of updated book info searched based on ID query provided.
```javascript
const updateBookHandler = asyncHandler(async (req, res) => {
  // extract title and author from req.body
  const { title, author } = req.body;
  // pass id and title & author
  const book = await findBookByIdAndUpdate(req.params.id, { title, author });
  res.status(202).json(book);
});
```

DELETE:
- method DELETE, "localhost/api/books/:id", copy ID from any books data and paste into `:id`, inside JSON body put `{ "title": "Book Two", "author": "Author Two" }` to delete that book, Send DELETE request will display the deleted book info searched based on ID query.
```javascript
const deleteBookHandler = asyncHandler(async (req, res) => {
  const book = await findBookByIdAndDelete(req.params.id);
  res.status(202).json(book);
});
```

# Error Handling

```javascript
// errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
  console.log(`here is an error middleware`);
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    msg: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = { errorMiddleware }; // ????
// module.exports = errorMiddleware;  ????
```

```javascript
// server.js //
const errorMiddleware = require("./middleware/errorMiddleware");

// throw error on root route, *localhost:3000/*
app.get("/", (req, res, next) => {
  throw new Error("fake error!");
  res.send("Hi fella!");
});

// use custom error middleware
app.use(errorMiddleware);
```

---

> express-async-handler: https://www.npmjs.com/package/express-async-handler
> error handling: https://expressjs.com/en/guide/error-handling.html
> when `throw Error` inside data controller with `async` method it doesn't work, because the problem is `async`'s function. when we have async function, we need to use Express Async Handler to solve this problem.
> use `express-async-handler`, `throw new Error()`, additional json response (`stack`).

- to handling nasty crash.
- first, create new folder named "middleware".
- the reason we used express-async-handler in all Controllers is to have something which is able to gracefully pass the errors. so that Express would not crash and panic when encounters error and shut down the API. also want to convey to the front-end.
- inside middleware folder, create file `error.middleware.js` and create `errorHandler()` function. exports.
- import `errorHandler()` into `server.js` file. here, the **positioning** actually matters.
- go to Postman, make same request for a deleted data.
- then, inside "services" we can throw errors and they would be gracefully handled.

```javascript
// error.middleware.js
const errorHandler = (err, req, res, next) => {
  console.log(`this is an error middleware`);
  res.status(500).json({
    error: {
      code: 500,
      message: err.message
    };
  });
};

module.exports = { errorHandler };
// module.exports = errorMiddleware;  ???? curly bracket or not?
```

```javascript
// server.js //
const errorHandler = require("./middleware/error.middleware");

// ...

// use custom error middleware
app.use(errorHandler);
```

Second phase of book.service.js:
- why now use async function?
- 

```javascript
// book.service.js //

// ...

const findBookByIdAndUpdate = async (id, body) => {
  const book = await findBookById(id);
  
  if (!book) throw new Error(`Product not found with ID ${id}`); // can remove this bcs it actually depends on findBookById(id) already.
  for (const key of Object.keys(body)) {
    book[key] = body[key] ?? book[key];
  };
  await book.save();
  return book;
};

const findBookByIdAndDelete = async (id) => {
  const book = await findBookById(id);
  if (!book) {
    res.status(404);
    throw new Error(`Product not found with ID ${id}`); // can remove this bcs it actually depends on findBookById(id) already.
  };
  
  await book.destroy();
  return book;
};

// ...
```