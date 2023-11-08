- [Initiating Sequelize Connection with Node.js](#initiating-sequelize-connection-with-nodejs)
  - [Installing](#installing)
  - [Connecting to a database](#connecting-to-a-database)
    - [Testing the connection](#testing-the-connection)
- [Models](#models)
  - [Connecting to the MySQL Server with the mysql Client](#connecting-to-the-mysql-server-with-the-mysql-client)

# Initiating Sequelize Connection with Node.js

In this tutorial you will learn to make a simple setup of Sequelize.

## Installing

> https://sequelize.org/docs/v6/getting-started/

```shell
npm install --save sequelize
```

You'll also have to manually install the driver for your database of choice:

```shell
# One of the following:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
$ npm install --save oracledb # Oracle Database
```

## Connecting to a database

To connect to the database, you must create a Sequelize instance. This can be done by either passing the connection parameters separately to the Sequelize constructor or by passing a single connection URI:

```javascript
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite) 
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
```

A Sequelize instance is the core component of the Sequelize ORM (Object-Relational Mapping) library in Node.js. It represents a connection to a specific database and provides methods and configuration options to interact with that database. Here are some key aspects of a Sequelize instance:

**Configuration Options**:
   - `dialect`: Specifies the type of database you're connecting to (e.g., 'mysql', 'postgres', 'sqlite').
   - `host`: The database server's host.
   - `port`: The port number where the database server is listening.
   - `username` and `password`: Database access credentials.
   - `logging`: A function that logs SQL queries (useful for debugging).
   - `pool`: Object defining connection pool options.
   - `define`: Object with options for table and model definition.
   - Other options specific to the chosen database dialect.

### Testing the connection

You can use the `.authenticate()` function to test if the connection is OK:

```javascript
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
```

**Closing the connection**:

Sequelize will keep the connection open by default, and use the same connection for all queries. If you need to close the connection, call `sequelize.close()` (which is asynchronous and returns a Promise).

> NOTE: Once `sequelize.close()` has been called, it's impossible to open a new connection. You will need to create a new Sequelize instance to access your database again.

# Models

> https://sequelize.org/api/v6/class/src/model.js~model

Models are the essence of Sequelize. A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends [Model](https://sequelize.org/api/v6/class/src/model.js~model).

The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).

> Similar with a Schema from mongoose (MongoDB)

A model can be defined using the `define` method on sequelize:

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

> https://sequelize.org/docs/v6/core-concepts/model-basics/#using-sequelizedefine

Sequelize best practices:

```javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
```

**Synchronize Models with Database**: Create or update the database tables based on your models using Sequelize's synchronization methods.

`await sequelize.sync();`

## Connecting to the MySQL Server with the mysql Client

> 💡source: https://dev.mysql.com/doc/refman/8.0/en/mysql.html
> source: https://dev.mysql.com/doc/mysql-getting-started/en/
> **in terminal to create a database, type `mysql -u root -p` will enter the MySQL Command-Line Client terminal. enter mysql password: password1**

Once your MySQL server is up and running, you can connect to it as the superuser root with the mysql client.

On Windows, click **Start, All Programs, MySQL, MySQL 5.7 Command Line Client** (or **MySQL 8.0 Command Line Client**, respectively). If you did not install MySQL with the MySQL Installer, open a command prompt, go to the `bin` folder under the base directory of your MySQL installation, and issue the following command:

```shell
C:\> mysql -u root -p
```

You are then asked for the `root` password, which was assigned in different manners according to the way you installed MySQL.

If you have forgotten the root password you have chosen or have problems finding the temporary root password generated for you, see [How to Reset the Root Password](https://dev.mysql.com/doc/refman/8.0/en/resetting-permissions.html).

```sql
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
```

To disconnect from the MySQL server, type QUIT or \q at the client:

```sql
mysql> QUIT
```