const { Router } = require("express");
const { petsController } = require("../controllers");
const {uploadPhoto} = require("../middleware");

const petsRouter = Router();

petsRouter
  .route("/")
  .get(petsController.getPets)
  .post(uploadPhoto.uploadPetsPhoto, petsController.addPet);

petsRouter
  .route("/:petsId")
  .get(petsController.getPet)
  .patch(petsController.updatePet)
  .delete(petsController.deletePet);

module.exports = petsRouter;
