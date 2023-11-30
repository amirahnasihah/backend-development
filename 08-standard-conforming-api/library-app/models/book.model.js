const { DataTypes } = require("sequelize");

// 3️⃣ define Book model
const bookModel = (db) => {
  return db.define("Book", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = { bookModel };
