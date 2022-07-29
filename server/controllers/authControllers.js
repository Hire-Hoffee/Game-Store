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

  async emailVerifying(req, res, next) {
    try {
      const { verifyEmail } = await authServices.emailVerifyingService(req.query.token);
      return res.redirect(`${process.env.VUE_API_URL}/auth/login?verifyEmail=${verifyEmail}`);
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

      const result = await authServices.loginService(credentials);

      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async userLogout(req, res, next) {
    try {
      const result = await authServices.logoutService(
        req.headers["authorization"]
      );
      return res.clearCookie("token").json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authControllers;
