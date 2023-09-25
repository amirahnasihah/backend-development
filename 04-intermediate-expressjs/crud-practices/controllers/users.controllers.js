const getUsers = (req, res) => {
  res.json({ msg: "works!" });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  res.json({ id: id });
};

module.exports = { getUsers, getUserById };
