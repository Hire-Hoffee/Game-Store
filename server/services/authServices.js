const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");
const { Customer } = require("../models/userModels");
const {
  genRefreshToken,
  genAccessToken,
  verifyToken,
} = require("../config/webTokens");

const authServices = {
  async registrationService(credentials) {
    try {
      if (
        credentials.password !== credentials.password_again ||
        credentials.password.length == 0
      ) {
        throw createHttpError(400, "Passwords do not match or empty");
      }

      delete credentials.password_again;

      if (await Customer.findOne({ where: { email: credentials.email } })) {
        throw createHttpError(400, "User already exists");
      }

      credentials.password = await bcrypt.hash(credentials.password, 7);
      await Customer.create(credentials);

      return { message: "User has been registered" };
    } catch (error) {
      throw error;
    }
  },

  async loginService(credentials) {
    try {
      const user = await Customer.findOne({
        where: { email: credentials.email },
      });

      if (!user) {
        throw createHttpError(400, "Incorrect user email");
      }
      if (!(await bcrypt.compare(credentials.password, user.password))) {
        throw createHttpError(400, "Incorrect user password");
      }

      const refreshToken = genRefreshToken({
        email: credentials.email + "_" + Date.now(),
      });
      const accessToken = genAccessToken({ email: credentials.email });

      await Customer.update(
        { authToken: refreshToken },
        { where: { email: user.email } }
      );

      return {
        accessToken,
        message: "Login success",
      };
    } catch (error) {
      throw error;
    }
  },

  async logoutService(accessToken) {
    try {
      const token = accessToken?.split(" ")[1];

      if (!token) {
        throw createHttpError(401, "Token not found");
      }

      const user = verifyToken(token, process.env.SECRET_ACCESS);

      await Customer.update(
        { authToken: null },
        { where: { email: user.email } }
      );

      return { message: "Logout success" };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = authServices;
