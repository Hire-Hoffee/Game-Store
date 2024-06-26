const createHttpError = require("http-errors");
const {
  Customer,
  Payment,
  Cart,
  OrderInfo,
  Review,
  GameRating,
} = require("../models/userModels");
const { Game, Platform, GameKey } = require("../models/gameModels");
const { verifyToken } = require("../config/webTokens");
const sendEmail = require("../config/nodemailer");
const { Op } = require("sequelize");

const userServices = {
  async userAccountService(userToken) {
    try {
      const jwt = userToken.split(" ")[1];
      const { email } = verifyToken(jwt, process.env.SECRET_ACCESS, {
        ignoreExpiration: true,
      });

      if (!jwt) {
        throw createHttpError(404, "User information not found");
      }

      const userData = await Customer.findOne({
        where: { email: email },
        attributes: {
          exclude: [
            "id",
            "isVerified",
            "verificationString",
            "authToken",
            "password",
          ],
        },
        include: [
          {
            model: Payment,
            attributes: { exclude: ["customerId", "id", "CVV"] },
          },
        ],
      });

      if (!userData) {
        throw createHttpError(404, "User not found");
      }

      return userData;
    } catch (error) {
      throw error;
    }
  },

  async addToCartService(data) {
    try {
      const jwt = data.userToken.split(" ")[1];
      if (!jwt) {
        throw createHttpError(404, "User information not found");
      }

      const keys = await GameKey.findAll({
        where: {
          [Op.and]: [{ platformId: data.platformId }, { gameId: data.gameId }],
        },
      });
      if (keys.length == 0) {
        throw createHttpError(404, "No keys available for this platform");
      }

      const { email } = verifyToken(jwt, process.env.SECRET_ACCESS, {
        ignoreExpiration: true,
      });
      const { cart } = await Customer.findOne({
        where: { email: email },
        include: [Cart],
      });

      const result = await OrderInfo.findOne({
        where: { [Op.and]: [{ cartId: cart.id }, { gameId: data.gameId }] },
      });
      if (result) {
        throw createHttpError(500, "This game already in the cart");
      }

      await OrderInfo.create({
        cartId: cart.id,
        gameId: data.gameId,
        platformId: data.platformId,
      });

      return { message: "Game has been added to cart" };
    } catch (error) {
      throw error;
    }
  },

  async deleteFromCartService(data) {
    try {
      const jwt = data.userToken.split(" ")[1];
      if (!jwt) {
        throw createHttpError(404, "User information not found");
      }

      const { email } = verifyToken(jwt, process.env.SECRET_ACCESS, {
        ignoreExpiration: true,
      });
      const { cart } = await Customer.findOne({
        where: { email: email },
        include: [Cart],
      });

      await OrderInfo.destroy({
        where: {
          cartId: cart.id,
          gameId: data.gameId,
        },
      });

      return await this.cartGamesService(data.userToken);
    } catch (error) {
      throw error;
    }
  },

  async cartGamesService(userToken) {
    try {
      const jwt = userToken.split(" ")[1];
      if (!jwt) {
        throw createHttpError(404, "User information not found");
      }

      const { email } = verifyToken(jwt, process.env.SECRET_ACCESS, {
        ignoreExpiration: true,
      });
      const { id } = await Customer.findOne({ where: { email: email } });
      const result = await Cart.findOne({
        where: { customerId: id },
        include: [
          {
            model: OrderInfo,
            include: [
              { model: Platform, attributes: { exclude: ["platformSVG"] } },
              {
                model: Game,
                attributes: {
                  exclude: [
                    "description",
                    "releaseDate",
                    "rating",
                    "trailer",
                    "developerId",
                  ],
                },
              },
            ],
          },
        ],
      });

      return result;
    } catch (error) {
      throw error;
    }
  },

  async changeAmountService(data, token) {
    try {
      const keys = await GameKey.count({
        where: {
          [Op.and]: [{ platformId: data.platformId }, { gameId: data.gameId }],
        },
      });

      if (keys < data.amount) {
        throw createHttpError(
          500,
          `The maximum number of games available on this platform is ${keys}`
        );
      }

      await OrderInfo.update(
        { quantity: data.amount },
        {
          where: {
            [Op.and]: [{ cartId: data.cartId }, { gameId: data.gameId }],
          },
        }
      );
      return await this.cartGamesService(token);
    } catch (error) {
      throw error;
    }
  },

  async postReviewService(data) {
    try {
      const jwt = data.userToken.split(" ")[1];
      if (!jwt) {
        throw createHttpError(404, "User information not found");
      }

      const { email } = verifyToken(jwt, process.env.SECRET_ACCESS, {
        ignoreExpiration: true,
      });
      const { id } = await Customer.findOne({ where: { email: email } });

      const result = await Review.findOne({
        where: { [Op.and]: [{ customerId: id }, { gameId: data.gameId }] },
      });
      if (result) {
        throw createHttpError(
          500,
          "You have already posted a review for this game"
        );
      }

      const createGameReview = async () => {
        return await Review.create({
          customerId: id,
          gameId: data.gameId,
          content: data.content,
        });
      };
      const createGameRating = async () => {
        return await GameRating.create({
          customerId: id,
          reviewCustomerId: id,
          gameId: data.gameId,
          rating: data.rating,
        });
      };

      await Promise.all([createGameReview(), createGameRating()]);

      return { message: "Review has been created" };
    } catch (error) {
      throw error;
    }
  },

  async buyGamesService(data) {
    try {
      const jwt = data.userToken.split(" ")[1];
      if (!jwt) {
        throw createHttpError(404, "User information not found");
      }
      const { email } = verifyToken(jwt, process.env.SECRET_ACCESS, {
        ignoreExpiration: true,
      });

      const orderResult = await Cart.findOne({
        where: { id: data.cartId },
        attributes: { exclude: ["id", "customerId"] },
        include: [
          {
            model: OrderInfo,
            attributes: { exclude: ["cartId", "gameId", "platformId"] },
            include: [
              {
                model: Game,
                attributes: {
                  exclude: [
                    "description",
                    "releaseDate",
                    "rating",
                    "trailer",
                    "developerId",
                    "poster",
                  ],
                },
              },
              {
                model: Platform,
                attributes: { exclude: ["platformSVG"] },
              },
            ],
          },
        ],
      });

      const plainResult = orderResult.get({ plain: true });
      const keysToDelete = [];

      for (let i = 0; i < plainResult.orderInfos.length; i++) {
        const gameKeys = await GameKey.findAll({
          where: {
            [Op.and]: [
              { platformId: plainResult.orderInfos[i].platform.id },
              { gameId: plainResult.orderInfos[i].game.id },
            ],
          },
          attributes: { exclude: ["id", "gameId", "platformId"] },
          limit: plainResult.orderInfos[i].quantity,
          raw: true,
        });

        keysToDelete.push(...gameKeys);
        plainResult.orderInfos[i].keys = gameKeys;
      }

      for (let i = 0; i < keysToDelete.length; i++) {
        await GameKey.destroy({ where: { key: keysToDelete[i].key } });
      }
      await OrderInfo.destroy({ where: { cartId: data.cartId } });
      plainResult.totalPrice = data.totalPrice;

      await sendEmail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your order information",
        template: "purchasedGames",
        context: {
          orderResult: plainResult,
          mainURL: process.env.MAIN_URL || "http://localhost:3000",
        },
      });

      return { message: "Your order has been sent to your email address" };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userServices;
