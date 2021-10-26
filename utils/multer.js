const multer = require("multer");

module.exports({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./uploads/");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  }),
  fileFilter: (req, file, callback) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
});
