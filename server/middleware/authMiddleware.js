const createHttpError = require("http-errors");
const { verifyToken, genAccessToken } = require("../config/webTokens");
const { Customer } = require("../models/userModels");

async function authValidation(req, res, next) {
  const authToken = req.headers["authorization"]?.split(" ")[1];
  try {
    if (!authToken) {
      throw createHttpError(401, "User is not authorized. JWT undefined.");
    }
    verifyToken(authToken, process.env.SECRET_ACCESS);
    return next();
  } catch (error) {
    if (error.message == "jwt expired") {
      try {
        const payload = verifyToken(authToken, process.env.SECRET_ACCESS, {
          ignoreExpiration: true,
        });
        const userData = await Customer.findOne({
          where: { email: payload.email },
        });
        verifyToken(userData.authToken, process.env.SECRET_REFRESH);
        const newToken = genAccessToken({ email: payload.email });
        res.set("Update-Token", newToken);
        return next();
      } catch (error) {
        return next(
          createHttpError(401, "Unexpected auth error. Please log in again")
        );
      }
    }
    return next(
      createHttpError(401, "Unexpected auth error. Please log in again")
    );
  }
}

module.exports = authValidation;
