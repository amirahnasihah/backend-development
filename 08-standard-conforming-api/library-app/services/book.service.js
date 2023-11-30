// 4️⃣ MySQL operations that wants to perform in books
const { Book } = require("../models");

const createNewBook = (body) => {
  return Book.create({ ...body });
};

const findManyBooks = (searchParam) => {
  return Book.findAll({ where: { ...searchParam } });
};

const findBookById = async (id) => {
  const book = await Book.findByPk(id);
  if (!book) throw new Error(`Product not found with ID ${id}`);
  return book;
};

const findOneBook = (searchParam) => {
  // all these `return` just returning promises. so, doesnt need `await` since its just directly returning.
  return Book.findOne({ where: { ...searchParam } });
};

const findBookByIdAndUpdate = async (id, body) => {
  const book = await findBookById(id);

  for (const key of Object.keys(body)) {
    book[key] = body[key] ?? book[key];
  }
  await book.save();
  return book;
};

const findBookByIdAndDelete = async (id) => {
  const book = await findBookById(id);
  await book.destroy();
  return book;
};

module.exports = {
  createNewBook,
  findManyBooks,
  findBookById,
  findOneBook,
  findBookByIdAndUpdate,
  findBookByIdAndDelete,
};
