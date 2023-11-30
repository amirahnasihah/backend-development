const { Router } = require("express");
const bookRouter = require("./book.router");
// Bind Swagger to Router
const swaggerUi = require("swagger-ui-express");
const { swaggerSpecification } = require("../config/swagger.config");

const router = Router();

router.use("/books", bookRouter);

// Swagger docs
router.use("/docs", swaggerUi.serve);
router.use("/docs", swaggerUi.setup(swaggerSpecification));

module.exports = { router };
