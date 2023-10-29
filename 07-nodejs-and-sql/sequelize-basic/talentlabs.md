- [Node.JS and SQL - Section 5](#nodejs-and-sql---section-5)
  - [An Introduction to Sequelize](#an-introduction-to-sequelize)
  - [Initiating a Connection](#initiating-a-connection)
  - [Models](#models)
  - [Inserting and Reading Data](#inserting-and-reading-data)
  - [Updating and Deleting Data](#updating-and-deleting-data)
  - [One to One Relationship](#one-to-one-relationship)
  - [One to Many Relationship](#one-to-many-relationship)
  - [Many to Many (M:N) Association](#many-to-many-mn-association)
- [A dive into Models](#a-dive-into-models)

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

## One to One Relationship

> https://vertabelo.com/blog/one-to-one-relationship-in-database/

- Say we have a Users Table and a Company table, each company has exactly one admin, to define that relationship we can use the association syntax in sequelize. The syntax needs us to specify the relation ship in both the DBs where, we state that the company “belongs to” a user and the user can “have one” company.

The foreign key option here is used to define the foreign key to be created in the table marked as the the table which will belong to the other.

```javascript
const User = sequelize.define(“User”, <attributes>);
const Company = sequelize.define(“Company”, <attributes>);

User.hasOne(Company, { foreignKey: “owner” });
Company.belongsTo(User, { foreignKey: “owner” });
```

## One to Many Relationship

- One to many relationship is when one model owns multiple entities of another type, let’s take the example where we have one user who can have multiple posts, and we define this relationship with the foreign key of “creator” in the posts table.

```javascript
const User = sequelize.define(“User”, <attributes>);
const Post = sequelize.define(“Post”, <attributes>);

User.hasMany(Post, { foreignKey: “creator” });
Post.belongsTo(User, { foreignKey: “creator” });
```

## Many to Many (M:N) Association

- Let’s take the following case, we have a table of Projects and a Table of Employees, a Project can have many employees and an employee could be working on multiple projects at once. Or the case where one class can have many students and the student can be taking many classes, in such cases we have 2 tables which are associated to each other in a fashion know as M:N or Many to Many.

In a Many to Many association we use a Junction Table, or a Join table to describe the relationship so as to not mess up the structure of the data and turning it into a mess in one of the other tables which controls the relationship.

- A many to many association in Sequelize can be defined using the belongs to many method.

```javascript
const Company = sequelize.define(“Company”, <attributes>);
const Project = sequelize.define(“Project”, <attributes>);
const CompanyProjects = sequelize.define(“CompanyProjects”,{});

Company.belongsToMany(Project, { through: CompanyProjects });
Project.belongsToMany(Company, { through: CompanyProjects });
```

- Now we can define a User or a Project while creating one of the entities using the include option, or using the add relationship methods on any of the entities.

```javascript
const company = await Company.create({ // creating using the include option
 companyName: “TalentLabs”, 
 Projects: [{
 title: “Backend CABE"
 }, {
 title: “JavaScript M1”
 }]
}, {
 include: [Project]
});
const company = await Company.findByPk(companyId); // using add relation method
const project = await Project.findByPk(projectId);

company.addProject(project, { through: CompanyProjects });
```

# A dive into Models (Tutorial)

main.js:

```javascript
// const { Sequelize, Op, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const { Sequelize } = require("sequelize"); // 1) to  require Sequelize services

// 2) to connect to the database, you must create a Sequelize instance
const db = new Sequelize({
  dialect: "mysql2",
  host: "127.0.0.1",
  username: "root",
  password: "pass",
  port: 3306,
  database: "sequelize", // database name
});

// 5) Model define
const User = db.define('User', {
  // 6) Model attributes are defined here
  id: {
    // REQUIRED
    type: DataTypes.INTEGER,
    // OPTIONAL
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
    // defaultValue: "Doe",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
})

// 3) test connection
const run = async () => {
  try {
    // 3) .authenticate() function to test if the connection is OK
    await db.authenticate();
    // 4) .sync() method to create or update database tables based on your defined models
    await db.sync();
    // 7) Model Instances - we create entities (values)
    const user = await User.create({
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@smith.com"
    })
    
    const user = await User.findAll({})
    
    const user = await User.findAll({ where: { id: 12  } })
    
    const bob = await User.findByPk(1); // by Primary Key
    
    const bob = await User.findOne({ where: { firstName: "Bob" } })
    
    const users = await User.findAll({ where: {email: { [Op.like]: "%doe.com" } } })
     // 8) debug
  console.log(user, "\n", user.toJSON());
  console.log(bob.toJSON());
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
run();
```

> Methods of changing the current working directory: `cd ..` or `cd ~`

1. install dependencies: `npm i sequelize mysql2 nodemon`.
2. run the main.js in integrated terminal: `nodemon main.js`.
3. in terminal to create a database, type `mysql -u root -p` will enter mysql terminal. enter mysql password. if term 'mysql' is not recognized shown, [go here](https://maheshwaghmare.com/mysql/how-to/not-recognized-as-an-internal-or-external-command/).
4. then, `create database <db_name>;`, example; `create database sequelize;`. `exit` mysql to quit. tip: `;` put semicolon symbol.
5. add database
```javascript
// ...
  database: "sequelize" // database to use
// ...
```
6. enter mysql terminal, `use sequelize;` to use db. then, `desc users;` will show db properties.
```sql
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int          | NO   | PRI | NULL    | auto_increment |
| firstName | varchar(255) | YES  |     | NULL    |                |
| lastName  | varchar(255) | NO   |     | NULL    |                |
| email     | varchar(255) | NO   | UNI | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
6 rows in set (0.01 sec)
```
7. in main.js, add new user by using `create` method from sequelize. `User.create({ ... })`

> The term 'mysql' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.

## Create and findAll

```javascript
const user = await User.create({
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@smith.com"
    })
    
    const user = await User.findAll({})
    
    const user = await User.findAll({ where: { id: 12  } })
    
    const bob = await User.findByPk(1); // by Primary Key
    
    const bob = await User.findOne({ where: { firstName: "Bob" } })
    
    const users = await User.findAll({ where: {email: { [Op.like]: "%doe.com" } } })
     // 8) debug
  console.log(user, "\n", user.toJSON());
  console.log(bob.toJSON()),
```

## Update and Delete Data

- to update either directly manipulate property attributes or using `set`. to delete using `destroy`.

1. update: `set`. we grab the data that wants to update

```javascript
// edit jane's lastName and email:
const jane = await User.findByPk(2);

jane.set({
  lastName: "Smith",
  email: "jane@smith.com",
});
await jane.save()

console.log(jane.toJSON())
```

2. delete: `destroy`. we find the entity and then destroy them

```javascript
const john = await User.findByPk(1);
await john.destroy();
```

## Association (Relationship)

```javascript
// create another database called Company
const Company = db.define("Company", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// now, have 2 models defined: User and Company
```

> foreign key always exist on the child.

Creating associations in sequelize is done by calling one of the `belongsTo` / `hasOne` / `hasMany` / `belongsToMany` functions on a model (the source), and providing another model as the first argument to the function (the target).

> https://sequelize.org/api/v6/class/src/associations/base.js~association
> https://dev.to/projectescape/the-comprehensive-sequelize-cheatsheet-3m1m#associations

**The model whose function we will be calling is called the source model, and the model which is passed as a parameter is called the target model.**

1. `hasOne` - adds a foreign key to the target and singular association mixins to the source.
2. `belongsTo` - add a foreign key and singular association mixins to the source.
3. `hasMany` - adds a foreign key to target and plural association mixins to the source.
4. `belongsToMany` - creates an N:M association with a join table and adds plural association mixins to the source. The junction table is created with sourceId and targetId.

### `hasOne`

```javascript
const User = sequelize.define(“User”, <attributes>);
const Company = sequelize.define(“Company”, <attributes>);

User.hasOne(Company, { foreignKey: “owner” });
Company.belongsTo(User, { foreignKey: “owner” });
```

