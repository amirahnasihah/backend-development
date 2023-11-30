const getAllBooks = async (req, res) => {
  try {
    res.json({ msg: "Getting books" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAllBooks };
