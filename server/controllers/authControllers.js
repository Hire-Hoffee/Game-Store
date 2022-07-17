const authServices = require("../services/authServices");

const authControllers = {
  async userRegistration(req, res, next) {
    try {
      const credentials = {
        email: req.body.userEmail,
        password: req.body.userPassword,
        password_again: req.body.passwordAgain,
      };

      const result = await authServices.registrationService(credentials);

      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },
  async userLogin(req, res, next) {
    try {
      const credentials = {
        email: req.body.userEmail,
        password: req.body.userPassword,
      };

      const { accessToken, message } = await authServices.loginService(
        credentials
      );

      return res
        .cookie("token", "Bearer " + accessToken, {
          maxAge: 1000 * 60 * 60 * 72,
          httpOnly: true,
          encode: String,
        })
        .json({ message: message });
    } catch (error) {
      next(error);
    }
  },
  async userLogout(req, res, next) {
    try {
      const result = await authServices.logoutService(req.cookies.token);
      return res.clearCookie("token").json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authControllers;
