const { Router } = require("express");
const petsRouter = require("./petsRouter");
const characteristicsRouter = require("./characteristicsRouter");
const breedsRouter = require('./breedsRouter');

const appRouter = Router();

appRouter.use("/pets", petsRouter);
appRouter.use("/characteristics", characteristicsRouter);
appRouter.use("/breeds", breedsRouter);

module.exports = appRouter;
