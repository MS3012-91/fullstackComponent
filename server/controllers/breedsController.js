const createHttpError = require("http-errors");
const _ = require("lodash");
const { Op } = require("sequelize");
const { Pet, Characteristic } = require("../db/models");

module.exports.getBreed = async (req, res, next) => {
  const breedName = req.params.breed;
  console.log("breedName", breedName);
  try {
    const foundPets = await Pet.findAll({
      where: {
        breed: breedName,
        image: {
          [Op.not]: null,
        },
      },
      attributes: ["id", "image"]
    });
      //   foundPets.getCharacteristics();
      //console.log("foundPets", foundPets);
    // console.log("first", await foundPets.hasCharacteristics());
    if (!foundPets) {
      next(createHttpError(404, "Breed not found"));
    }
    res.status(200).send(foundPets);
  } catch (err) {
    next(err);
  }
};
