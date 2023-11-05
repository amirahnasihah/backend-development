const asyncHandler = require("express-async-handler");

const createBookHandler = asyncHandler(async (req, res) => {
  try {
    console.log("get data list");
    res.json({ msg: "hi" });
    res.status(200);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = { createBookHandler };
