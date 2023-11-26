const fetchBooks = async (req, res, next) => {
  try {
    await res.json({ msg: "FetchBooks controller" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { fetchBooks };
