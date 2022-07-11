const mainServices = require("../services/mainServices");

const mainControllers = {
  async getMainPage(req, res, next) {
    try {
      const result = await mainServices.mainPageService();
      res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async getAllGames(req, res, next) {
    try {
      const result = await mainServices.allGamesService(req.query.page);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async getAllCategories(req, res, next) {
    try {
      const result = await mainServices.allCategoriesService();
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async getGameInfo(req, res, next) {
    try {
      const result = await mainServices.gameInfoService(req.params.title);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async getGamesNews(req, res, next) {
    try {
      const result = await mainServices.gamesNewsService();
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = mainControllers;
