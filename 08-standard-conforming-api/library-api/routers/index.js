// routers/index.js
const { Router } = require("express");
const bookRouter = require("./book.router");

const router = Router();

// 1️⃣ Bind Swagger to Router - swagger require config
const swaggerUi = require("swagger-ui-express");
const { swaggerSpecification } = require("../config/swagger.config");

// ... router.use("/api", bookRouter)
router.use("/api", bookRouter);

// 2️⃣ use SWAGGER
router.use("/docs", swaggerUi.serve);
router.use("/docs", swaggerUi.setup(swaggerSpecification));

module.exports = { router };
