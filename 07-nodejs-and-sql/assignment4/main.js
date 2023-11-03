const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	dialect: "mysql",
	host: "root",
	password: "password1",
	port: 3306,
	database: "assignment4",
});