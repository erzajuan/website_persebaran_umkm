var multer = require('multer')

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./assets/");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.originalname
      );
    },
  });

  const upload = multer({storage : diskStorage})

  module.exports = upload;
