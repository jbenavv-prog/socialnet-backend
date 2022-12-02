const jwt = require("jsonwebtoken");
const config = process.env;

const authValidation = (req, res, next) => {
  const token = req.body.token || req.header("token");

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = {
  authValidation,
};
