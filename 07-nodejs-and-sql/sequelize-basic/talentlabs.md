# Node.JS and SQL - Section 5

## An Introduction to Sequelize

- ORM stands for Object Relationship Mapping, it’s a piece of software that abstracts away the complexity of having to write queries and makes interacting with databases as natural as possible for us as developers.
- Sequelize is a really popular ORM that is widely used to interact with MySQL and can be installed using

```shell
$ npm install sequelize mysql2
```

## Initiating a Connection
- A sequelize connection can be initiated using the Sequelize function imported from the package, you need to pass certain connection options and the connection is good to go.

```javascript
const { Sequelize } = require(“sequelize”);
const sequelize = new Sequelize({
 dialect: “mysql", // the flavor, or dialect of SQL
 port: <port>, // Port the server is running on, default 3306
 username: <username>, // username with which to connect to the DB
 password: <password>, // password for the username provided
 database: <database> // database to use
});
```

- The connection can then be opened and checked if it works using the authenticate method.

```javascript
await sequelize.authenticate().catch((err) /> {
 console.error(“unable to connect to SQL\n”, err);
});
```
