# Initiating Sequelize Connection with Node.js

In this tutorial you will learn to make a simple setup of Sequelize.

## Installing

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

```shell
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