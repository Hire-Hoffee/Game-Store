const {
  Game,
  Genre,
  Developer,
  Image,
  Platform,
  MinimumSR,
  RecommendedSR,
} = require("../models/gameModels");
const { News, NewsImage } = require("../models/newsModels");

const { Op } = require("sequelize");

const mainControllers = {
  async getMainPage(req, res, next) {
    try {
      const dateNow = new Date();
      const twoMonthAgo = new Date(
        new Date().setMonth(new Date().getMonth() - 2)
      );
      const oldTime = new Date(new Date().setMonth(new Date().getMonth() - 72));

      const getComingSoonGames = async () => {
        return await Game.findAll({
          attributes: {
            exclude: ["description", "trailer", "developerId", "rating"],
          },
          where: { releaseDate: { [Op.gte]: dateNow } },
        });
      };
      const getNewGames = async () => {
        return await Game.findAll({
          attributes: {
            exclude: ["trailer", "developerId", "rating"],
          },
          where: { releaseDate: { [Op.between]: [twoMonthAgo, dateNow] } },
        });
      };
      const getOldGames = async () => {
        return await Game.findAll({
          attributes: {
            exclude: ["description", "trailer", "developerId", "rating"],
          },
          where: { releaseDate: { [Op.lte]: oldTime } },
        });
      };
      const getLatestNews = async () => {
        return await News.findAll({
          attributes: {
            exclude: ["content"],
          },
          order: [["createdAt", "DESC"]],
          limit: 3,
        });
      };
      const getPopCategories = async () => {
        return await Genre.findAll({ order: [["genreName", "ASC"]], limit: 5 });
      };

      const result = ([
        comingSoonGames,
        newGames,
        oldGames,
        latestNews,
        popCategories,
      ] = await Promise.all([
        getComingSoonGames(),
        getNewGames(),
        getOldGames(),
        getLatestNews(),
        getPopCategories(),
      ]));

      res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async getAllGames(req, res, next) {
    try {
      const page = req.query.page - 1 || 0;
      const limit = 10;

      const result = await Game.findAndCountAll({
        order: [["gameTitle", "ASC"]],
        attributes: { exclude: ["description"] },
        limit,
        offset: page > 0 ? page * limit : 0,
      });

      result.limit = limit;

      if (!result || result.length == 0) {
        return res.status(404).json({ message: "Result not found" });
      }

      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async getAllCategories(req, res, next) {
    try {
      const result = await Genre.findAll({ order: [["genreName", "ASC"]] });
      if (!result || result.length == 0) {
        return res.status(404).json({ message: "Result not found" });
      }
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async getGameInfo(req, res, next) {
    try {
      const gameTitle = req.params.title;
      const convertTitle = gameTitle.toLowerCase().split("_").join(" ");

      const result = await Game.findOne({
        where: { gameTitle: { [Op.iLike]: convertTitle } },
        include: [Genre, Developer, Image, Platform, MinimumSR, RecommendedSR],
      });

      if (!result || result.length == 0) {
        return res.status(404).json({ message: "Result not found" });
      }

      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async getGamesNews(req, res, next) {
    try {
      const getAllNews = async () => {
        return await News.findAll({
          attributes: { exclude: ["content"] },
          order: [["createdAt", "DESC"]],
          offset: 2,
        });
      };
      const getLatestNews = async () => {
        return await News.findAll({
          attributes: { exclude: ["content"] },
          order: [["createdAt", "DESC"]],
          limit: 2,
        });
      };

      const result = ([latestNews, allNews] = await Promise.all([
        getLatestNews(),
        getAllNews(),
      ]));

      if (!result || result.length == 0) {
        return res.status(404).json({ message: "Result not found" });
      }

      return res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = mainControllers;
