// swagger config

const {name, version) = require("../package.json");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: name,
      version: version,
    },
  },
  apis: ["./src/routers/*.js", "./src/models/*.js"],
};

const swaggerSpecification = swaggerJsdoc(swaggerOptions);

module.exports = {swaggerSpecification};