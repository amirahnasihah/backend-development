# Install Dependencies

1. a new folder for our simple projects to initiate Sequelize connection with Node.js.
2. open vscode and type `npm init -y` on terminal to create package.json file.
3. install sequelize and mysql2 `npm i sequelize mysql2`.
4. connect with mysql monitor `mysql -u root -p` and enter password.
5. then, create a database `create database sequelize`. exit.
6. add database options and set to sequelize.

```javascript
// const { Sequelize, Op, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: "mysql2",
  host: "127.0.0.1",
  username: "root",
  password: "pass",
  port: 3306,
  database: "sequelize"
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
```

# Getting Started

# Models

