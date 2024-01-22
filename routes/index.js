const { Router } = require("express");
const petsRouter = require("./petsRouter");
const characteristicsRouter = require("./characteristicsRouter");

const appRouter = Router();

appRouter.use("/pets", petsRouter);
appRouter.use("/characteristic", characteristicsRouter);

module.exports = appRouter;
