// {id, name, age}
let users = [
  {
    id: 10,
    name: "Jane Smith",
    age: 30,
  },
  {
    id: 11,
    name: "Bob Smith",
    age: 40,
  },
];

/* GET */
const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const { id } = req.params;
  // u is the user. basically, we want to find the user with a matching id.
  const user = users.find((u) => {
    return u.id === Number(id);
  });
  if (!user) return res.json({ error: "User not found" });
  res.json(user);
};

/* CREATE */
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

/* DELETE */
const deleteUserById = (req, res) => {
  const { id } = req.params;
  // we'll copy the user which is about to be deleted, so users.find() and make sure it's Number ID.
  const user = users.find((u) => u.id === Number(id));
  if (!user) res.json({ error: "User doesn't exist" });

  // we'll filter so that user.id is not equal to ID. this to make sure that the user gets deleted.
  users = users.filter((u) => u.id !== Number(id));
  res.json(user);
};

/* UPDATE */
const updateUserById = (req, res) => {
  const { id } = req.params;
  // we find the user first.
  const user = users.find((u) => {
    return u.id === Number(id);
  });
  // then, check if the user doesn't exist.
  if (!user) res.json({ error: "User not found" });
  // after find and check, we'll filter the user.
  users = users.filter((u) => u.id !== Number(id));

  // otherwise, update the user. we'll spread the user and then spread the request.body.
  // this will take all the user fields but it will also update the user fields with anything being added by the body.
  const updatedUser = {
    ...user,
    ...req.body,
  };
  users.push(updatedUser);
  res.json(updatedUser);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
};
