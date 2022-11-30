const express = require("express");
const updatePhotoProfile = require("../controllers/profile.controller");
const router = express.Router();
const multer = require("multer");

const upload = multer();

router.post("/updatePhotoProfile", upload.single('photo'), updatePhotoProfile);

module.exports = router;
