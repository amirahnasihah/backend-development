const asyncHandler = require("express-async-handler");

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

module.exports = { createBookHandler };
