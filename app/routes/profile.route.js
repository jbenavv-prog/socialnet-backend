const express = require("express");
const updatePhotoProfile = require("../controllers/profile.controller");
const router = express.Router();

router.put("/updatePhotoProfile", updatePhotoProfile);

module.exports = router;
