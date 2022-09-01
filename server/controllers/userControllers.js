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

  async addToCart(req, res, next) {
    try {
      const data = {
        gameId: req.params.gameId,
        userToken: req.headers["authorization"],
      };
      const result = await userServices.addToCartService(data);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async deleteFromCart(req, res, next) {
    try {
      const data = {
        gameId: req.params.gameId,
        userToken: req.headers["authorization"],
      };
      const result = await userServices.deleteFromCartService(data);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async getCartGames(req, res, next) {
    try {
      const result = await userServices.cartGamesService(
        req.headers["authorization"]
      );
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async changeAmount(req, res, next) {
    try {
      const result = await userServices.changeAmountService(
        req.body,
        req.headers["authorization"]
      );
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async postReview(req, res, next) {
    try {
      const reviewData = {
        userToken: req.headers["authorization"],
        gameId: req.params.gameId,
        content: req.body.reviewContent,
      };
      const result = await userServices.postReviewService(reviewData);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userControllers;
