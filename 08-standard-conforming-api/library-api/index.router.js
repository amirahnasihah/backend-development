// routers/index.js
const { Router } = require('express');
const router = Router();

// swagger js config require
const swaggerUi = require("swa")
const { swaggerSpecification } = require("./config/swagger.config");


// ... router.use("/api", )
router.use("/docs", )