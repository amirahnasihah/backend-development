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

## Models

- A model is the core essence of Sequelize, it’s the abstraction for a table in the database, it allows us to define and update tables straight from our application’s code. 
- A model can be defined using the define method on sequelize:

```javascript
sequelize.define(“<model_name>”, attributes, options);

sequelize.define(“User”, {
 email: { 
 primaryKey: true, 
 allowNull: false, 
 unique: true, 
 type: DataTypes.STRING
 }, 
 name: { 
 type: DataTypes.STRING, 
 allowNull: false
 }
});
```

## Inserting and Reading Data

- Data can be inserted into a table by using the “create” method on a model.

```javascript
<Model_Name>.create({
 property1: value1,
 property2: value2
});
```

- We can use one of the many methods that exist on the Model to find the data 
we need.

1. `findAll`: returns all the entries which match the criteria.
2. `findOne`: returns the first entry to match the criteria specified.
3. `findByPk`: finds an entry by the primary key.

## Updating and Deleting Data

- An instance of the model can be updated either by manipulating the attribute directly or by bulk updating the attributes using the set method.

```javascript
const user = await User.findByPk(email);
user.firstName = “Jane”; // by manipulating attribute
user.set({ // by using set method
 age: 32, 
 salary: 72000
});

await user.save();
```

- An instance of a model can be deleted using the “destroy” method

```javascript
const user = await User.findByPk(email);

await user.destroy();
```
