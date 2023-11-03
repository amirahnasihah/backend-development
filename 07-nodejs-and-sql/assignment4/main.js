const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  username: "root",
  password: "password",
  port: 3306,
  database: "sequelize",
});

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Post, { foreignKey: "creatorId" });
Post.belongsTo(User, { foreignKey: "creatorId" });

const run = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("database connected successfully!");

    // sql queries
  } catch (error) {
    console.log(error.message);
  }
};
run();
