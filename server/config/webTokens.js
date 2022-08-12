const jwt = require("jsonwebtoken");

const genRefreshToken = (payload, expiresIn = "120h") => {
  return jwt.sign(payload, process.env.SECRET_REFRESH, { expiresIn });
};

const genAccessToken = (payload, expiresIn = "3h") => {
  return jwt.sign(payload, process.env.SECRET_ACCESS, { expiresIn });
};

const verifyToken = (token, key, options) => {
  return jwt.verify(token, key, options);
};

module.exports = { genRefreshToken, genAccessToken, verifyToken };
