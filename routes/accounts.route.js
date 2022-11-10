const express = require("express");
const router = express.Router();
const Account = require("../models/accounts.model");

router.get("/getAccounts", (req, res) => {
  console.log("accounts/ api works!");
  res.send("accounts/ api works!");
});

router.post("/newAccount", async (req, res) => {
  try {
    await Account.create(req.body);
    res.status(200).json({
      message: "Account created!",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

module.exports = router;
