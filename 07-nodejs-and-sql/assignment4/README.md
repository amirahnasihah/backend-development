# Assignment 4 - SQL Database Integration with Sequelize

Write JavaScript code with Sequelize which would:

1.	Create a database table called User, with the fields (id, username, email)
2.	Create a Table Posts with fields (title, body)
3.	Use the appropriate types and constraints and create a one to many relationship where one user can have many posts.

| Task                                                      | Weight |
|-----------------------------------------------------------|--------|
| User (id) has not null, unique and primary constraints (can either be auto incremented int or UUIDv4) | 20     |
| Post (id) has not null, unique and primary constraints (can either be auto incremented int or UUIDv4) | 20     |
| User (email and username) are strings and not null        | 20     |
| Post (title and body) are strings and not null            | 20     |
| User and Post have proper one to many relationship setup with Posts being a child to user | 20     |

# One-To-Many

1. have access to Sequelize
2. connect to database with Sequelize using instances

```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	
})
```