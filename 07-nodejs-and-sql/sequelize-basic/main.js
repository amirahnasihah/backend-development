// const { Sequelize, Op, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const { Sequelize, DataTypes, Op } = require("sequelize");

const db = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  username: "root",
  password: "password1",
  port: 3306,
  database: "test_sequelize",
});

// Models
const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
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
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

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

const Post = db.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  media: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

const Project = db.define("Project", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

const CompanyProjects = db.define({}); // for junction table

User.hasOne(Company, { foreignKey: "owner" });
Company.belongsTo(User, { foreignKey: "owner" });

User.hasMany(Post, { foreignKey: "creatorId" });
Post.belongsTo(User, { foreignKey: "creatorId" });

Company.belongsToMany(Project, { through: CompanyProjects });
Project.belongsToMany(Company, { through: CompanyProjects });

const run = async () => {
  try {
    await db.authenticate();
    await db.sync();
    
    // CREATE
    const user = await User.create({
      firstName: "Baek",
      lastName: "Ji Young",
      email: "baek@young.com",
    });
    
    // READ
    const findUsers = await User.findAll({});
    console.log("findusers", findUsers);

    const doe = await User.findAll({
      where: { email: { [Op.like]: "%doe.com" } },
    });
    console.log(doe.toJSON());
    
    // UPDATE
    const baek = await User.findByPk(3);
    baek.lastName = "Pak Gu";
    await baek.save();
    
    // DELETE
    const delJane = await User.findByPk(2);
    await delJane.destroy();
    
    // Relationship
      // One-To-One
    const fooCompany = await Company.create({
      name: "Foo Company",
      owner: 1,
    });
    
      // One-To-Many
    for (let i = 0; i < 5; i++) {
        const post = await Post.create({
          description: `Hello World ${i}`,
          media: `https://foo.com/${i}.png`,
          creatorId: 1,
      });
      console.log(post);
    }
    const userAssoc = await User.findByPk(1, { include: [Company, Post] });
    console.log(userAssoc.toJSON());
    
      // Many-To-Many
    
    
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
run();

