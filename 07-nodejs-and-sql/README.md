# Sequelize, MySQL, and MySQL2

1. MySQL: MySQL is a popular open-source relational database management system. It is the actual database software used for storing and managing data. It uses SQL for querying and managing data.

2. MySQL2: MySQL2 is a Node.js driver for MySQL. It is a library that allows Node.js applications to interact with MySQL databases. It is more efficient and performs better than the original MySQL driver for Node.js.

3. Sequelize: Sequelize is an Object-Relational Mapping (ORM) library for Node.js. It provides an abstraction layer on top of databases like MySQL (and others) to work with them using JavaScript objects and models, rather than writing raw SQL queries. Sequelize can work with MySQL or MySQL2 as its underlying database driver.

So, if you're building a Node.js application and want to work with a MySQL database, you might use MySQL2 as the driver to interact with the MySQL database, and you can use Sequelize as an additional layer to work with the database more easily using JavaScript objects and models. The choice between MySQL and MySQL2 depends on your specific requirements, but MySQL2 is generally considered more efficient and faster when working with Node.js.

# Sequelize

> source: https://sequelize.org/

Installing. Sequelize is available via [npm](https://www.npmjs.com/package/sequelize) (or [yarn](https://yarnpkg.com/package/sequelize)).

`npm install --save sequelize`