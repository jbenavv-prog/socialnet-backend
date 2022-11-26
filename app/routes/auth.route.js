const express = require("express");
const login = require("../controllers/auth.controller");
const { authValidation } = require("../util/middlewares/authValidation");
const router = express.Router();

router.post("/login", login);
router.post("/authValidation", authValidation, (req, res) => {
  res.status(200).json({
    ok: true,
  });
});

module.exports = router;
