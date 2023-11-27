// routers/index.js
const { Router } = require("express");
// 1️⃣ Bind Swagger to Router - swagger require config
const swaggerUi = require("swagger-ui-express");
const { swaggerSpecification } = require("../config/swagger.config");

const router = Router();

// 2️⃣ use SWAGGER
router.use("/docs", swaggerUi.serve);
router.use("/docs", swaggerUi.setup(swaggerSpecification));

module.exports = { router };
