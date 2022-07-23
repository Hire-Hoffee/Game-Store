const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const schema = "userSchema";

module.exports = {
  Customer: sequelize.define(
    "customer",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: { args: true, msg: "Incorrect email format" },
          notNull: { args: true, msg: "Email cannot be null" },
          notEmpty: { args: true, msg: "Email cannot be empty" },
          len: {
            args: [10, 50],
            msg: "Email must be between 10 and 50 characters long",
          },
        },
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Password cannot be null" },
          notEmpty: { args: true, msg: "Password cannot be empty" },
          // do not work properly because of the bcrypt password
          len: {
            args: [8, 100],
            msg: "Password must be between 8 and 50 characters long",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "USER",
      },
      authToken: { type: DataTypes.STRING },
    },
    { timestamps: false, schema }
  ),

  Payment: sequelize.define(
    "payment",
    {
      cardHolder: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Name cannot be null" },
          notEmpty: { args: true, msg: "Name cannot be empty" },
          is: { args: /[a-zA-Z\s]/, msg: "Name only allows letters" },
        },
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isCreditCard: { args: true, msg: "Incorrect card number" },
        },
      },
      CVV: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "CVV cannot be null" },
          notEmpty: { args: true, msg: "CVV cannot be empty" },
          len: { args: [3, 3], msg: "Incorrect CVV" },
        },
      },
    },
    { timestamps: false, schema, freezeTableName: true }
  ),

  GameRating: sequelize.define(
    "gameRating",
    {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          notNull: { args: true, msg: "Rating cannot be null" },
          notEmpty: { args: true, msg: "Rating cannot be empty" },
          min: { args: 0, msg: "Minimum rating value is 0" },
          max: { args: 10, msg: "Maximum rating value is 10" },
        },
      },
    },
    { timestamps: false, schema, freezeTableName: true }
  ),

  Review: sequelize.define(
    "review",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Review cannot be null" },
          notEmpty: { args: true, msg: "Review cannot be empty" },
          len: { args: [20, 500], msg: "Review must be between 20 and 500" },
        },
      },
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
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Quantity cannot be null" },
          notEmpty: { args: true, msg: "Quantity cannot be empty" },
          min: { args: 1, msg: "Minimum quantity 1" },
          max: { args: 100, msg: "Maximum quantity 100" },
        },
      },
    },
    { timestamps: false, schema, freezeTableName: true }
  ),
};
