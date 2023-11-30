const getIndex = async (req, res) => {
  try {
    res.json({ msg: "hello" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getIndex };
