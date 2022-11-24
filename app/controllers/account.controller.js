const Account = require("../models/accounts.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const getAccounts = (req, res) => {
  console.log("accounts/ api works!");
  res.send("accounts/ api works!");
};

const newAccount = async (req, res) => {
  try {
    const user = req.body;
    const passwordHash = await bcrypt.hash(user.password, saltRounds);

    if (passwordHash) {
      user.password = passwordHash;
    }

    await Account.create(user);
    res.status(200).json({
      message: "Account created!",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  newAccount,
  getAccounts,
};
