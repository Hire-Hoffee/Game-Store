const authServices = require("../services/authServices");

const authControllers = {
  async userRegistration(req, res, next) {
    try {
      const credentials = {
        email: req.body.user_email,
        password: req.body.user_password,
        password_again: req.body.password_again,
      };

      const result = await authServices.registrationService(credentials);

      return res.json(result);
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
