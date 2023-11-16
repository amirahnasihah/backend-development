// routers/index.js
const { Router } = require('express');
const router = Router();

// swagger js config require
const swaggerUi = require("swagger-ui-express")
const { swaggerSpecification } = require("./config/swagger.config");


// ... router.use("/api", bookController)
router.use("/docs", swaggerUi.serve);
router.use("/docs", swaggerUi.setup(swaggerSpecification));

module.exports = router;