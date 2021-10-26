const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;

dotenv.config();
const cloud_name = process.env.cloudinaryCloudName;

const api_key = process.env.cloudinaryAPIKey;

const api_secret = process.env.cloudinaryAPISecret;

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

module.exports = cloudinary;
