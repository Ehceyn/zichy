const express = require("express");
const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
const fileFilter = (req, file, callback) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 7 },
  fileFilter: fileFilter,
});

// Item Model
const Work = require("../../models/Work");

// @route  GET api/works
// @desc  Get All Works
// @access  Public

router.get("/", (req, res) => {
  Work.find()
    .sort({ date: -1 })
    .then((works) => res.json(works));
});

// @route  POST api/works
// @desc  Ceate A Work
// @access  Public

router.post("/", upload.single("workImage"), (req, res) => {
  console.log(req.file);
  const newWork = new Work({
    img: req.file.path,
    category: req.body.category,
  });
  newWork.save().then((work) => res.json(work));
});

// @route  DELETE api/works
// @desc  Delete A Work
// @access  Public

router.delete("/:id", (req, res) => {
  Work.findById(req.params.id)
    .then((work) => work.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
