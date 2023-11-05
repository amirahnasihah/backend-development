const asyncHandler = require("express-async-handler");

const createBookHandler = asyncHandler(async (req, res) => {
  try {
    console.log("create new book");
    const { title, author } = req.body;
    const book = await createNewBook({ title, author });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = { createBookHandler };
