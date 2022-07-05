const bcrypt = require("bcrypt");
const { Customer } = require("../models/userModels");
const {
  genRefreshToken,
  genAccessToken,
  verifyToken,
} = require("../config/webTokens");

const authControllers = {
  async userRegistration(req, res, next) {
    try {
      const credentials = {
        email: req.body.user_email,
        password: req.body.user_password,
        password_again: req.body.password_again,
      };

      if (credentials.password !== credentials.password_again) {
        return res.json({ message: "Passwords do not match" });
      }

      delete credentials.password_again;

      if (await Customer.findOne({ where: { email: credentials.email } })) {
        return res.json({ message: "User already exists" });
      }

      credentials.password = await bcrypt.hash(credentials.password, 7);
      await Customer.create(credentials);

      return res.json({ message: "User has been registered" });
    } catch (error) {
      next(error);
    }
  },
  async userLogin(req, res, next) {
    try {
      const credentials = {
        email: req.body.user_email,
        password: req.body.user_password,
      };

      const user = await Customer.findOne({
        where: { email: credentials.email },
      });

      if (!user) {
        return res.json({ message: "Incorrect user data" });
      }
      if (!(await bcrypt.compare(credentials.password, user.password))) {
        return res.json({ message: "Incorrect user data" });
      }

      const refreshToken = genRefreshToken({
        email: credentials.email + "_" + Date.now(),
      });
      const accessToken = genAccessToken({ email: credentials.email });

      await Customer.update(
        { authToken: refreshToken },
        { where: { email: user.email } }
      );

      return res
        .cookie("token", "Bearer " + accessToken, {
          maxAge: 1000 * 60 * 60 * 72,
          httpOnly: true,
          encode: String,
        })
        .json({ message: "Login success" });
    } catch (error) {
      next(error);
    }
  },
  async userLogout(req, res, next) {
    try {
      const token = req.cookies.token.split(" ")[1];
      const user = verifyToken(token, process.env.SECRET_ACCESS);

      await Customer.update(
        { authToken: null },
        { where: { email: user.email } }
      );

      return res
        .clearCookie("token")
        .json({ message: "Logout success" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authControllers;
