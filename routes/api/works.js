const express = require("express");
const router = express.Router();
const multer = require("multer");
const { cloudinary } = require("../../utils/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Cloudinary DB for storing images
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "works",
    allowedFormats: ["jpg", "png"],
    transformation: [
      {
        height: 320,
        width: 250,
        crop: "scale",
        quality: 60,
        fetch_format: "auto",
      },
    ],
  },
});

// Fallback Uploads Folder for storing images
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

// File configurations
const fileFilter = (req, file, callback) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

// Multer Uploads the file to any of the storages.
// 'storage' is given prefrence', while 'dest' is a fallback storage
const upload = multer({
  storage: cloudinaryStorage,
  dest: storage,
  limits: { fileSize: 1024 * 1024 * 3 },
  fileFilter: fileFilter,
});

// Work Model
const Work = require("../../models/Work");

// @route  GET api/works/:catgory
// @desc  Get Works By Category
// @access  Public

//GET ALL WORKS
router.get("/", async (req, res) => {
  const qCategory = req.query.category;
  let limit = 12;
  let page = (Math.abs(parseInt(req.query.page)) || 1) - 1;
  try {
    let works;
    if (qCategory) {
      works = await Work.find({
        category: {
          $in: [qCategory],
        },
      })
        .sort({ date: -1 })
        .limit(limit)
        .skip(limit * page);
    } else {
      works = Work.find()
        .sort({ date: -1 })
        .limit(limit)
        .skip(limit * page);
    }

    res.status(200).json(works);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @route  POST api/works
// @desc  Ceate A Work
// @access  Public

router.post("/", upload.single("workImage"), (req, res) => {
  console.log(req.file);
  const newWork = new Work({
    img: req.file.path,
    category: ["All", req.body.category],
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
