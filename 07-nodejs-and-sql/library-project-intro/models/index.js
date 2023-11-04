const { Sequelize } = require("sequelize");
const { bookModel } = require("./book.model");

const db = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  username: "root",
  password: "password1",
  port: 3306,
  database: "libraryApi",
});

// // define schema inside same file
// const bookModel = (db) => {
//   return db.define("Book", {
//     id: {},
//   });
// };

// define schema in another file
const Book = bookModel(db);

module.exports = { db, Book };
