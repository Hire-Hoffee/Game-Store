const mainServices = require("../services/mainServices");

const mainControllers = {
  async getMainPage(req, res, next) {
    try {
      const result = await mainServices.mainPageService();
      return res.json(result);
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

  async searchGames(req, res, next) {
    try {
      const result = await mainServices.searchGamesService(req.query.gameTitle);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async searchGamesOnGenres(req, res, next) {
    try {
      const result = await mainServices.searchGamesOnGenresService(
        req.query.genre
      );
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async searchByFilter(req, res, next) {
    try {
      const searchParams = {
        price: req.query.price,
        genre: req.query.genre,
        platform: req.query.platform,
      };

      const result = await mainServices.searchByFilterService(searchParams);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = mainControllers;
