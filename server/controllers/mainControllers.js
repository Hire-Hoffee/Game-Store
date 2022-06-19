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
  getMainPage(req, res) {
    return res.json({ message: "home" });
  },

  async getAllGames(req, res, next) {
    try {
      const result = await Game.findAll({ order: [["gameTitle", "ASC"]] });
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
      const result = await News.findAll({
        order: [["createdAt", "ASC"]],
        include: NewsImage,
      });
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
