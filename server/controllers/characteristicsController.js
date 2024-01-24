const createHttpError = require("http-errors");
const { Characteristic } = require("../db/models");

module.exports.getCharacteristics = async (req, res, next) => {
  try {
    const foundPets = await Characteristic.findAll({
      raw: true,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({data: foundPets});
  } catch (err) {
    next(err);
  }
};
