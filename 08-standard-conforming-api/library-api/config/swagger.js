// swagger config

const {name, version) = require("../package.json")

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: name,
      version: "0.1.0",
    },
  },
  apis: ["./src/routers/*.ts", "./src/models/*.ts"],
};