const createHttpError = require("http-errors");
const path = require("path");
const _ = require("lodash");
const { Pet } = require("../db/models");
const { IMAGES_FOLDER } = require("../constants");

module.exports.addPet = async (req, res, next) => {
  try {
    const { body, file } = req;
    console.log("file", file);
    if (file) {
      body.image = path.join(IMAGES_FOLDER, file.filename);
    } 
    console.log("body", body);
    const createdPet = await Pet.create({...body});
    console.log("createdPet", createdPet);
    if (!createdPet) {
      return next(createHttpError(500, "Server Error"));
    }
    const preparedPet = _.omit(createdPet.get(), ["createdAt", "updatedAt"]);
    res.status(201).send({ data: preparedPet });
  } catch (err) {
    return next(err);
  }
};

module.exports.getPets = async (req, res, next) => {
  try {
    const pets = await Pet.findAll({
      raw: true,
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (!pets) {
      return next(createHttpError(404, "No pets Added"));
    }
    return res.status(200).send(pets);
  } catch (err) {
    return next(err);
  }
};

module.exports.getPet = async (req, res, next) => {
  const { petsId } = req.params;
  try {
    const foundPet = await Pet.findByPk(petsId);
    const petToSend = _.omit(foundPet.get(), ["createdAt", "updatedAt"]);
    if (!foundPet) {
      return next(createHttpError(404, "Pet not found"));
    }
    res.status(200).send(petToSend);
  } catch (err) {
    next(err);
  }
};

module.exports.updatePet = async (req, res, next) => {
  const { body, file } = req;
  const { petsId } = req.params;

  try {
    const [updatedPetCount, updatedPet] = await Pet.update(body, {
      where: {
        id: petsId,
      },
      raw: true,
      returning: true,
    });
    if (!updatedPetCount) {
      return next(createHttpError(404, "Pet wasn't be updated"));
    }
    return res.status(200).send(updatedPet);
  } catch (err) {
    next(err);
  }
};

module.exports.deletePet = async (req, res, next) => {
  const { petsId } = req.params;
  try {
    const deletedPet = await Pet.destroy({
      where: {
        id: petsId,
      },
    });
    if (!deletedPet) {
      return next(createHttpError(404, "Pet not Found"));
    }
    res.status(200).send("Pet deletes successfully");
  } catch (err) {
    next(err);
  }
};
