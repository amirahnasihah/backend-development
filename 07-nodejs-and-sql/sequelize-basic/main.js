// const { Sequelize, Op, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const { Sequelize, DataTypes, Op } = require("sequelize");

const db = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  username: "root",
  password: "password1",
  port: 3306,
  database: "test_sequelize",
});

// Models
const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const Company = db.define("Company", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const run = async () => {
  try {
    await db.authenticate();
    await db.sync();
    
    // CREATE
    const user = await User.create({
      firstName: "Baek",
      lastName: "Ji Young",
      email: "baek@young.com",
    });
    
    // READ
    const findUsers = await User.findAll({});
    console.log("findusers", findUsers);

    const doe = await User.findAll({
      where: { email: { [Op.like]: "%doe.com" } },
    });
    console.log(doe.toJSON());
    
    // UPDATE
    const baek = await User.findByPk(3);
    baek.lastName = "Pak Gu";
    await baek.save()
    
    // DELETE
    const delJane = await User.findByPk(2);
    await delJane.destroy();
    
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
run();

