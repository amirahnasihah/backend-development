const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "mysql",
  username: "root",
  password: "password1",
  host: "127.0.0.1",
  port: 3306,
  database: "test_db",
});

const User = db.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const Project = db.define("Project", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "admin",
  },
  media: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Hashtag = db.define("Hashtag", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// join table for Project and Hashtag M:M
const ProjectHashtags = db.define("ProjectHashtags", {});

// 1:1
User.hasMany(Project, { foreignKey: "role" });
Project.belongsTo(User, { foreignKey: "role" });

// M:M
Project.belongsToMany(Hashtag, { through: ProjectHashtags });
Hashtag.belongsToMany(Project, { through: ProjectHashtags });

// create 2 users
// create 4 projects
// create multiple hashtags M:M
//    => project 1 with hashtag 2,3,5 | project 2 with hashtag 1,2,3,4,5 | project 3 with hashtag 2,3 | project 4 with hashtag 1,4,5
const run = async () => {
  try {
    await db.authenticate();
    await db.sync();
    console.log("Connected to database!");

    // MYSQL QUERIES //
    // const project = await .findOne({ title: "Project One" });
    // const hashtag = await .findAll({
    //   where: { name: ["Hashtag 2", "Hashtag 3", "Hashtag 5"] },
    // });
    // project.addHashtag(hashtag, { through: ProjectHashtags });

    const findProjectHashtag = await Project.findAll(
      { where: { title: "Project Two" } },
      { include: [{ model: Hashtag, attributes: ["name"] }] }
    );

    // console.log(hashtag.toJSON());
    console.log(JSON.parse(JSON.stringify(findProjectHashtag)));
  } catch (error) {
    console.log(error.message);
  }
};
run();
