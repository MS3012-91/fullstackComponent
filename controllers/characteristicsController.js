const createHttpError = require("http-errors");

module.exports.getCharacteristics = async (req, res, next) => {
    try {
        console.log('Hello');
        next(createHttpError(501, 'Not Implemented'))
  } catch (err) {
    next(err);
  }
};
