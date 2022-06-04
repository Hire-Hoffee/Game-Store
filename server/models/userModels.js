const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const schema = "user_schema";

module.exports = {
  Customer: sequelize.define(
    "customer",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
      },
      password: { type: DataTypes.STRING, allowNull: false },
      authToken: { type: DataTypes.STRING },
    },
    { timestamps: false, schema }
  ),

  Payment: sequelize.define(
    "payment",
    {
      cardHolder: { type: DataTypes.STRING, allowNull: false },
      cardNumber: { type: DataTypes.STRING, allowNull: false },
      CVV: { type: DataTypes.STRING },
    },
    { timestamps: false, schema, freezeTableName: true }
  ),

  GameRating: sequelize.define(
    "gameRating",
    {
      rating: { type: DataTypes.STRING },
    },
    { timestamps: false, schema, freezeTableName: true }
  ),

  Review: sequelize.define(
    "review",
    {
      content: { type: DataTypes.TEXT },
    },
    { timestamps: false, schema }
  ),

  Cart: sequelize.define(
    "cart",
    {},
    { timestamps: false, schema, freezeTableName: true }
  ),

  OrderInfo: sequelize.define(
    "orderInfo",
    {
      quantity: { type: DataTypes.INTEGER, defaultValue: 1, allowNull: false },
    },
    { timestamps: false, schema, freezeTableName: true }
  ),
};
