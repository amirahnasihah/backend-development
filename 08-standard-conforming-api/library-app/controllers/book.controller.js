// 5️⃣ actual logic of books'code with custom error handling
const asyncHandler = require("express-async-handler");
const {
  createNewBook,
  findManyBooks,
  findBookById,
  findOneBook,
  findBookByIdAndUpdate,
  findBookByIdAndDelete,
} = require("../services/book.service");

// TEST
const getAllBooks = async (req, res) => {
  try {
    res.json({ msg: "Getting books" });
  } catch (error) {
    console.error(error);
  }
};

// BOOKS FROM MYSQL DB

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

const getManyBooksHandler = asyncHandler(async (req, res) => {
  const books = await findManyBooks({ ...req.query });
  res.json(books);
});

const deleteBookHandler = asyncHandler(async (req, res) => {
  const book = await findBookByIdAndDelete(req.params.id);
  res.status(202).json(book);
});

const updateBookHandler = asyncHandler(async (req, res) => {
  const { title, author } = req.body;
  const book = await findBookByIdAndUpdate(req.params.id, { title, author });
  res.status(202).json(book);
});

module.exports = {
  getAllBooks,
  createBookHandler,
  getManyBooksHandler,
  deleteBookHandler,
  updateBookHandler,
};
