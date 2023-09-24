const { Router } = require("express");
const indexRouter = require("./index.router");
const userRouter = require("./users.router");

const router = Router();

// to bring multiple routers together, have 2 arguments.
// first arg is the prefix for all of routes that in the router.
router.use("/", indexRouter);
router.use("/users", userRouter);
