// {id, name, age}
const users = [];

const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const { id } = req.params;
  // u is the user. basically, we want to find the user with a matching id.
  const user = users.find((u) => {
    return u.id == id;
  });
  if (!user) return res.json({ error: "User not found" });
  res.json(user);
};

const createUser = (req, res) => {
  const { id, name, age } = req.body;
  // if no id, name and age we return error.
  if (!id && name && age) return res.json({ error: "bad request" });

  const user = { id, name, age };
  // duplicacy check.
  if (users.find((u) => u.id === id))
    res.json({ error: "User already exists" });
  // otherwise, we add the user to the array.
  users.push(user);
  // and we return the user.
  res.json(user);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  // we'll filter so that user.id is not equal to ID. this to make sure that the user gets deleted.
  users = users.filter((u) => u.id !== id);
};

module.exports = { getUsers, getUserById, createUser };
