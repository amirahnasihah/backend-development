const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	dialect: "mysql",
	host: "root",
	password: "password1",
	port: 3306,
	database: "assignment4",
});

const User = sequelize.define("User", {
	id: {
		type: DataTypes.UUID,
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
	}
});

const Post = sequelize.define("Post", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	body: {
		type: DataTypes.STRING,
		allowNull: false,
	}
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