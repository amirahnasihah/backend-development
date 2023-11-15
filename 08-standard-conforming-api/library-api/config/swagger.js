// swagger config

const {name, version) = require("../package.json");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: name,
      version: "0.1.0",
    },
  },
  apis: ["./src/routers/*.js", "./src/models/*.js"],
};

const swaggerSpecifications = swaggerJsdoc(swaggerOptions);