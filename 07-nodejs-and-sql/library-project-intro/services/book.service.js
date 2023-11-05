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

const deleteBookById = async (id) => {
  const book = await findBookById(id);
  await book.destroy();
  return book;
};