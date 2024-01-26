const { Router } = require("express");
const { petsController } = require("../controllers");
const { uploadPhoto } = require("../middleware");

const petsRouter = Router();

petsRouter
  .route("/")
  .get(petsController.getPets)
  .post(uploadPhoto.uploadPetsPhoto, petsController.addPet);
//.post(petsController.addPet);

petsRouter
  .route("/:petsId")
  .get(petsController.getPet)
  .patch(petsController.updatePet) // add middleware
  .delete(petsController.deletePet);

module.exports = petsRouter;
