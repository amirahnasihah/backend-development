const { DataTypes } = require("sequelize");

const bookModel = (db) => {
  return db.define(Book, {
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

// OPEN API MODEL SPEC
/**
 * @openapi
 * components:
 *  schemas:
 *    CreateBookDto:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          default: An amazing book
 *        author:
 *
 */

module.exports = { bookModel };
