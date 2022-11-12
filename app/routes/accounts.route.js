const express = require("express");
const {
  getAccounts,
  newAccount,
} = require("../controllers/account.controller");
const router = express.Router();

router.get("/getAccounts", getAccounts);

router.post("/newAccount", newAccount);

module.exports = router;
