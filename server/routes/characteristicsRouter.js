const { Router } = require("express");
const {characteristicsController} = require('../controllers');

const characteristicsRouter = Router();
characteristicsRouter.get("/", characteristicsController.getCharacteristics);

module.exports = characteristicsRouter;
