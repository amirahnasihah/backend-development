// models -> services -> controller -> routers -> server.js
const { Sequelize } = require("sequelize");
const { bookModel } = require("./book.model");

// 1️⃣ sequelize config
const db = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  username: "root",
  password: "password1",
  port: 3306,
  database: "libraryApi",
});

// 2️⃣ define schema@model
const Book = bookModel(db);

module.exports = { db, Book };
