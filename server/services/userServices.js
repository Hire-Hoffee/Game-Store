const { Customer, Payment, Cart, OrderInfo } = require("../models/userModels");
const { Game } = require("../models/gameModels");
const { verifyToken } = require("../config/webTokens");
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

      const { email } = verifyToken(jwt, process.env.SECRET_ACCESS, {
        ignoreExpiration: true,
      });
      const { cart } = await Customer.findOne({
        where: { email: email },
        include: [Cart],
      });

      await OrderInfo.create({
        cartId: cart.id,
        gameId: data.gameId,
      });

      return { message: "Game has been added to cart" };
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
      });

      return result;
    } catch (error) {
      throw error;
    }
  },
  async changeAmountService(data, token) {
    try {
      await OrderInfo.update(
        { quantity: data.amount },
        {
          where: {
            [Op.and]: [{ cartId: data.cartId }, { gameId: data.gameId }],
          },
        }
      );
      return this.cartGamesService(token);
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userServices;
