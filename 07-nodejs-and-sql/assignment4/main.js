const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	dialect: "mysql",
	host: "root",
	password: "password1",
	port: 3306,
	database: "assignment4",
});

const run = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		console.log("database connection succeed!")
		
		// sql queries
	}
	catch(error) {
		console.log(error.message)
	}
};
run();