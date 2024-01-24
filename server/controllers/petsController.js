const createHttpError = require('http-errors');
const path = require('path');
const _ = require('lodash');
const { Pet } = require('../db/models');
const { IMAGES_FOLDER } = require('../constants');


module.exports.addPet = async (req, res, next) => {
  const { body, file } = req;
  if (file) {
    body.image = path.join(IMAGES_FOLDER, file.filename);
}
    try {
      const createdPet = await Pet.create(body);
      if (!createdPet) {
        return next(createHttpError(500, 'Server Error'))
      }
      const preparedPet = _.omit(createdPet.get(), ['createdAt', 'updatedAt']);
      res.status(201).send({ data: preparedPet });
    }
    catch (err) {
        return next(err);
    }
};

module.exports.getPets = async (req, res, next) => {
  try {
  } catch (err) {
    return next(err);
  }
};

module.exports.getPet = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports.updatePet = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports.deletePet = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};