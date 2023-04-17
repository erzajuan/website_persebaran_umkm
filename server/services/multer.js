var multer = require("multer");

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadMulter = multer({
  storage: diskStorage,
}).single("image");
let upload = (req, res, next) => {
  uploadMulter(req, res, function (err) {
    if (err) {
      return next(err);
    }
    let image = "";

    if (typeof req.file == "undefined") {
      next();
    } else {
      image =
        req.protocol + "://" + req.get("host") + "/assets/" + req.file.filename;
      req.file.path = image;
      next();
    }
  });
};

module.exports = upload;
