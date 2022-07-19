const createHttpError = require("http-errors");
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
const axios = require("axios");
const chalk = require("chalk");

const mainServices = {
  async mainPageService() {
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

      return result;
    } catch (error) {
      throw error;
    }
  },

  async allGamesService(whatPage, whatLimit = 10) {
    try {
      const page = whatPage - 1 || 0;
      const limit = whatLimit;

      const result = await Game.findAndCountAll({
        order: [["gameTitle", "ASC"]],
        attributes: { exclude: ["description"] },
        limit,
        offset: page > 0 ? page * limit : 0,
      });

      result.limit = limit;

      if (!result || result.length == 0) {
        throw createHttpError(404, "Result not found");
      }

      return result;
    } catch (error) {
      throw error;
    }
  },

  async allCategoriesService() {
    try {
      const result = await Genre.findAll({ order: [["genreName", "ASC"]] });

      if (!result || result.length == 0) {
        throw createHttpError(404, "Result not found");
      }

      return result;
    } catch (error) {
      throw error;
    }
  },

  async gameInfoService(title) {
    try {
      const convertTitle = title.toLowerCase().split("_").join(" ");

      const result = await Game.findOne({
        where: { gameTitle: { [Op.iLike]: convertTitle } },
        include: [Genre, Developer, Image, Platform, MinimumSR, RecommendedSR],
      });

      if (!result || result.length == 0) {
        throw createHttpError(404, "Result not found");
      }

      try {
        const apiTitle = convertTitle.toLowerCase().split(" ").join("-");

        const gameMetacritic = (
          await axios.get(`https://api.rawg.io/api/games/${apiTitle}`, {
            params: { key: process.env.RAWG_API_KEY },
          })
        ).data;

        result.dataValues.metacritic = gameMetacritic.metacritic;
      } catch (error) {
        console.log("\n" + chalk.red(error) + "\n");
      }

      return result;
    } catch (error) {
      throw error;
    }
  },

  async gamesNewsService() {
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
        throw createHttpError(404, "Result not found");
      }

      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = mainServices;
