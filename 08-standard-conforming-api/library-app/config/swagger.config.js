const { name, version } = require("../package.json");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerConfig = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: name,
      version: version,
    },
  },
  // important: which routes should it actually look for. so, all ".js" file will be scanned by Swagger config.
  apis: ["./routers/*.js", "./models/*.js"],
};

const swaggerSpecification = swaggerJsdoc(swaggerConfig);

module.exports = { swaggerSpecification };
