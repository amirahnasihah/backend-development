# Install Dependencies

1. a new folder for our simple projects to initiate Sequelize connection with Node.js.
2. open vscode and type `npm init -y` on terminal to create package.json file.
3. install sequelize and mysql2 `npm i sequelize mysql2`.
4. connect with mysql monitor `mysql -u root -p` and enter password.
5. then, create a database `create database sequelize`. exit.
6. add database options and set to sequelize.

# Getting Started

main.js
```javascript
// const { Sequelize, Op, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const { Sequelize } = require("sequelize");

// connect to the database, you must create a Sequelize instance
const db = new Sequelize({
  dialect: "mysql2",
  host: "127.0.0.1",
  username: "root",
  password: "pass",
  port: 3306,
  database: "sequelize",
});

const run = async () => {
  try {
    // .authenticate() function to test if the connection is OK
    await db.authenticate();
    // .sync() method to create or update database tables based on your defined models
    await db.sync();
    // create entities (values)
    const user = await db.create
     // debug
  console.log(user, "\n", user.toJSON());
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
run();
```

# Model

- Models are the essence of Sequelize. A model is an abstraction that **represents a table** in your database.
- The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).
- A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the database. Usually, models have singular names (such as `User`) while tables have pluralized names (such as `Users`), although this is fully configurable.

## Model Definition

```javascript
const ModelName = db_name.define("tablename", {
  // s will be appended automatically to the tablename
  firstColumn: Sequelize.INTEGER,
  secondColumn: Sequelize.STRING,
});
```

Models can be defined in two equivalent ways in Sequelize:

- Calling `sequelize.define(modelName, attributes, options)`
- Extending `Model` and calling `init(attributes, options)`

**Using `sequelize.define`**:

```javascript
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
```

## Table name inference

By default, when the table name is not given, Sequelize automatically pluralizes the model name and uses that as the table name. This pluralization is done under the hood by a library called [inflection](https://www.npmjs.com/package/inflection), so that irregular plurals (such as `person -> people`) are computed correctly.

Of course, this behavior is easily configurable.

You can stop the auto-pluralization performed by Sequelize using

1. the `freezeTableName: true` option.

2. simply tell Sequelize the name of the table directly.
```javascript
sequelize.define('User', {
  // ... (attributes)
}, {
  tableName: 'Employees'
});
```

## Model synchronization

> https://sequelize.org/master/class/src/model.js~Model.html#static-method-sync

Sequelize will automatically perform an SQL query to the database. A model can be synchronized with the database by calling `model.sync(options)`, an asynchronous function (that returns a Promise).
> Note that this changes only the table in the database, not the model in the JavaScript side.

- `User.sync()` - This creates the table if it doesn't exist (and does nothing if it already exists)
- `User.sync({ force: true })` - This creates the table, dropping it first if it already existed
- `User.sync({ alter: true })` - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

Example:

```javascript
await User.sync({ force: true });
console.log("The table for the User model was just (re)created!");
```

**Synchronizing all models at once**

You can use `sequelize.sync()` to automatically synchronize all models. Example:

```javascript
await sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");
```

## Dropping tables

To drop the table related to a model:

````javascript
await User.drop();
console.log("User table dropped!");
````

To drop all tables:

```javascript
await sequelize.drop();
console.log("All tables dropped!");
```

# Model Instances

As you already know, a model is an ES6 class. An instance of the class represents one object from that model (which maps to one row of the table in the database). This way, model instances are DAOs.

## Creating an instance

```javascript
const jane = await User.create({ name: "Jane" });
// Jane exists in the database now!
console.log(jane instanceof User); // true
console.log(jane.name); // "Jane"
```

> Note: logging instances

```javascript
const jane = await User.create({ name: "Jane" });
// console.log(jane); // Don't do this
console.log(jane.toJSON()); // This is good!
console.log(JSON.stringify(jane, null, 4)); // This is also good!
```

# Basic Model Querying

> https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

Important notice: to perform production-ready queries with Sequelize, make sure you have read the Transactions guide as well. Transactions are important to ensure data integrity and to provide other benefits.

This guide will show how to make the standard CRUD queries.

## Simple SELECT queries

You can read the whole table from the database with the `findAll` method:

```javascript
// Find all users
const users = await User.findAll();
console.log(users.every(user => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));

SELECT * FROM ...
```

## Applying WHERE clauses

The `where` option is used to filter the query. There are lots of operators to use for the `where` clause, available as Symbols from [`Op`](https://sequelize.org/api/v6/variable/index.html#static-variable-Op).

**Basics**:

```javascript
modelName.findAll({
  where: {
    authorId: 2
  }
});
// SELECT * FROM post WHERE authorId = 2;
```

**Multiple checks can be passed**:

```javascript
modelName.findAll({
  where: {
    authorId: 12,
    status: 'active'
  }
});
// SELECT * FROM post WHERE authorId = 12 AND status = 'active';
```

Observe that no operator (from `Op`) was explicitly passed, so Sequelize assumed an **equality comparison** by default. The above code is equivalent to:

```javascript
const { Op } = require("sequelize");
modelName.findAll({
  where: {
    authorId: {
      [Op.eq]: 2
    }
  }
});
// SELECT * FROM post WHERE authorId = 2;
```

here Sequelize inferred that the caller wanted an `AND` for the **two checks**:

```javascript
const { Op } = require("sequelize");
modelName.findAll({
  where: {
    [Op.and]: [
      { authorId: 12 },
      { status: 'active' }
    ]
  }
});
// SELECT * FROM post WHERE authorId = 12 AND status = 'active';
```

An `OR` can be easily performed in a similar way:

```javascript
const { Op } = require("sequelize");
modelName.findAll({
  where: {
    [Op.or]: [
      { authorId: 12 },
      { authorId: 13 }
    ]
  }
});
// SELECT * FROM post WHERE authorId = 12 OR authorId = 13;
```

Since the above was an `OR` **involving the same field**, Sequelize allows you to use a slightly different structure which is more readable and generates the same behavior:

```javascript
const { Op } = require("sequelize");
Post.destroy({
  where: {
    authorId: {
      [Op.or]: [12, 13]
    }
  }
});
// DELETE FROM post WHERE authorId = 12 OR authorId = 13;
```