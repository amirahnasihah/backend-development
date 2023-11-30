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
 *          type: string
 *          default: Jane Doe
 *      required:
 *        - title
 *        - author
 *    UpdateBookDto:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          default: An amazing book
 *        author:
 *          type: string
 *          default: Jane Doe
 *      required:
 *    BookDto:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *        title:
 *          type: string
 *          default: An amazing book
 *        author:
 *          type: string
 *          default: Jane Doe
 *        createdAt:
 *          type: string
 *          format: date
 *        updateAt:
 *          type: string
 *          format: date
 */

module.exports = { bookModel };
