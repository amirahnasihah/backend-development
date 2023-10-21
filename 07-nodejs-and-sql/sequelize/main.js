// const { Sequelize, Op, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: "mysql2",
  host: "127.0.0.1",
  username: "root",
  password: "pass",
  port: 3306
})

const run = async () => {
  try{
    await db.authenticate();
    await db.sync();
    console.log('Connection has been established successfully.');
  }
  catch(error){
    console.error('Unable to connect to the database:', error);
  }
}
run();