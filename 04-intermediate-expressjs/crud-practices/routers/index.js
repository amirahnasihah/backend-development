const { Router } = require("express");
const indexRouter = require("./index.router");
const userRouter = require("./users.router");
const mathRouter = require("./math.router");

const router = Router();

// to bring multiple routers together, have 2 arguments.
// first arg is the prefix for all of routes that in the router.
router.use("/", indexRouter);
router.use("/users", userRouter);
router.use("/math", mathRouter);

// { router } bcs this the only router that will have in application.
// so, we named export
module.exports = { router };
