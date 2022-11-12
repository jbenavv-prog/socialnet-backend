const Account = require("../models/accounts.model");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const user = req.body;

  const result = await Account.findOne({ email: user.email });

  if (!result) {
    res.status(404).json({
      error: "Usuario no registrado",
    });
  }

  const isCorrectPassword = await bcrypt.compare(user.password, result.password);

  if (isCorrectPassword && result.isActive) {
    res.status(200).json({
      ok: true,
      data: {
        fullName: result.fullName,
        email: result.email,
        role: result.role,
      },
    });
  }
};

module.exports = login;
