const bcrypt = require("bcrypt");
const crypto = require("crypto");
const createHttpError = require("http-errors");
const { Customer } = require("../models/userModels");
const sendEmail = require("../config/nodemailer");
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
        throw createHttpError(401, "Passwords do not match or empty");
      }

      delete credentials.password_again;

      if (await Customer.findOne({ where: { email: credentials.email } })) {
        throw createHttpError(401, "User already exists");
      }

      credentials.verificationString = crypto.randomBytes(64).toString("hex");
      credentials.password = await bcrypt.hash(credentials.password, 7);

      const verificationToken = genAccessToken(
        {
          email: credentials.email,
          verificationString: credentials.verificationString,
        },
        "1h"
      );

      await sendEmail({
        from: process.env.EMAIL_USER,
        to: credentials.email,
        subject: "Email Confirmation",
        template: "emailConfirmation",
        context: {
          confirmationLink: `http://localhost:7070/api/auth/verify?token=${verificationToken}`,
          userEmail: credentials.email
        },
      });

      await Customer.create(credentials);

      return { message: "User has been registered" };
    } catch (error) {
      throw error;
    }
  },

  async emailVerifyingService(token) {
    try {
      const userData = verifyToken(token, process.env.SECRET_ACCESS);
      const user = await Customer.findOne({ where: { email: userData.email } });

      if (!user || user.isVerified) {
        throw createHttpError(401, "User do not exist or already verified");
      }
      if (user.verificationString !== userData.verificationString) {
        throw createHttpError(401, "User can not be verified");
      }

      await Customer.update(
        { isVerified: true, verificationString: null },
        { where: { email: userData.email } }
      );

      return { verifyEmail: "true" };
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
        throw createHttpError(401, "Incorrect user email");
      }
      if (!user.isVerified) {
        throw createHttpError(401, "Please verify your email");
      }
      if (!(await bcrypt.compare(credentials.password, user.password))) {
        throw createHttpError(401, "Incorrect user password");
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
        token: accessToken,
        message: "Login success",
        role: user.role,
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
