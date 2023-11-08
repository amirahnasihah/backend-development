# Assignment 4 - SQL Database Integration with Sequelize

Write JavaScript code with Sequelize which would:

1.	Create a database table called User, with the fields (id, username, email)
2.	Create a Table Posts with fields (title, body)
3.	Use the appropriate types and constraints and create a one to many relationship where one user can have many posts.

| Task                                                                                                  | Weight |
| ----------------------------------------------------------------------------------------------------- | ------ |
| User (id) has not null, unique and primary constraints (can either be auto incremented int or UUIDv4) | 20     |
| Post (id) has not null, unique and primary constraints (can either be auto incremented int or UUIDv4) | 20     |
| User (email and username) are strings and not null                                                    | 20     |
| Post (title and body) are strings and not null                                                        | 20     |
| User and Post have proper one to many relationship setup with Posts being a child to user             | 20     |

# One-To-Many

1. have access to Sequelize and DataTypes.
2. connect to database with Sequelize using instances.
3. define models or database schemas for tables: User and Post.
4. create association: One-To-Many association and foreign key.
5. check the connection using authenticate() and sync() database.
6. sql queries.

```javascript
const { Sequelize, DataTypes } = require('sequelize');

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

User.hasMany(Post, { foreignKey: "creatorId" });
Post.belongsTo(User, { foreignKey: "creatorId" });

const run = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		console.log("database connection succeed!")
		
	}
	catch(error) {
		console.log(error.message)
	}
};
run();
```
