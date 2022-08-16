const userServices = require("../services/userServices");

const userControllers = {
  async getUserAccount(req, res, next) {
    try {
      const result = await userServices.userAccountService(
        req.headers["authorization"]
      );
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userControllers;
