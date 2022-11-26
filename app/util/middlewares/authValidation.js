const jwt = require("jsonwebtoken");
const config = process.env;

const authValidation = (req, res, next) => {
  console.log(req.body);
  const token = req.body.token;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    jwt.verify(token, config.SECRET_KEY);
    //  req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = {
  authValidation,
};
