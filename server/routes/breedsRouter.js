const { Router } = require ("express");
const {breedsController} = require('../controllers');

const breedsRouter = Router();

breedsRouter.get("/:breed", breedsController.getBreed);

module.exports = breedsRouter;
