const express = require("express");
const router = express.Router();
const multer = require("multer");
const dotenv = require("dotenv");
const { cloudinary } = require("../../utils/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { calculateLimitAndOffset, paginate } = require("paginate-info");

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
  storage: cloudinaryStorage,
  dest: storage,
  limits: { fileSize: 1024 * 1024 * 3 },
  fileFilter: fileFilter,
});

// Item Model
const Work = require("../../models/Work");

// @route  GET api/works/:catgory
// @desc  Get Works By Category
// @access  Public

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qCategory = req.query.category;
  try {
    let works;
    if (qCategory) {
      works = await Work.find({
        category: {
          $in: [qCategory],
        },
      });
    } else {
      works = Work.find().sort({ date: -1 }).limit(12);
    }

    res.status(200).json(works);
  } catch (err) {
    res.status(500).json(err);
  }
});

// /**
//  * @function getAll
//  * @param {Object} req request object
//  * @param {Object} res response object
//  * @returns {Object} response object
//  * @description gets all available results
//  */
// router.get("/", async (req, res) => {
//   // const qCategory = req.query.category;
//   const {
//     query: { category, currentPage, pageSize },
//   } = req;
//   try {
//     const count = await Work.estimatedDocumentCount();
//     const { limit, offset } = calculateLimitAndOffset(page, pageSize);
//     const rows = await Work.find({
//       category: {
//         $in: [category],
//       },
//     })
//       .limit(limit)
//       .skip(offset);
//     const meta = paginate(currentPage, count, rows, pageSize);
//     return handleServerResponse(res, 200, { rows, meta });
//   } catch (error) {
//     return handleServerError(res, error);
//   }
// });

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
