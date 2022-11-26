const Account = require("../models/accounts.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const user = req.body;

  const result = await Account.findOne({ email: user.email });

  if (!result) {
    return res.status(404).json({
      error: "Usuario no registrado",
    });
  }

  const isCorrectPassword = await bcrypt.compare(
    user.password,
    result.password
  );

  if (isCorrectPassword && result.isActive) {
    const token = jwt.sign(
      {
        id: result._id,
        fullName: result.fullName,
        email: result.email,
        role: result.role,
      },
      process.env.SECRET_KEY
    );

    res.status(200).json({
      ok: true,
      token,
    });
  } else {
    res.status(403).json({
      message: "Contraseña incorrecta o usuario inactivo",
    });
  }
};

module.exports = login;
