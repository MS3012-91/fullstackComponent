const createHttpError = require("http-errors");
const multer = require("multer");
const path = require("path");
const { STATIC_FOLDER, IMAGES_FOLDER } = require('../constants');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(STATIC_FOLDER, IMAGES_FOLDER));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const fileFilter = (req, file, cb) => {
  const mimetype = file.mimetype;
  const appTypes = ["image/gif", "image/jpeg", "image/png", "image/webp"];
  let isSupportedFile = appTypes.includes(mimetype);
  cb(
    isSupportedFile
      ? null
      : createHttpError(
          415,
          "Support only .gif, .jpeg, .png  or .webp file types"
        ),
    isSupportedFile ? true : false
  );
};

const upload = multer({ storage, fileFilter });

module.exports.uploadPetsPhoto = upload.single("image");
