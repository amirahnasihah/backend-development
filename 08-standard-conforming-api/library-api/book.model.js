const { DataTypes } = require("sequelize");

const bookModel = (db) => {
  return db.define(Book, {
    id: {
      type: DataTypes.UUID,
    },
  });
};

module.exports = { bookModel };
