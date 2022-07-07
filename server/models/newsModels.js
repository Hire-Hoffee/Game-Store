const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const schema = "newsSchema";

module.exports = {
  News: sequelize.define(
    "news",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Title cannot be null" },
          notEmpty: { args: true, msg: "Title cannot be empty" },
          len: {
            args: [10, 100],
            msg: "Title must be between 10 and 100 characters long",
          },
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Content cannot be null" },
          notEmpty: { args: true, msg: "Content cannot be empty" },
          len: {
            args: [50, 1000],
            msg: "Title must be between 50 and 1000 characters long",
          },
        },
      },
      poster: {
        type: DataTypes.STRING,
        defaultValue: "/images/supportImages/imgNotFound.png",
      },
    },
    { freezeTableName: true, schema, createdAt: true, updatedAt: false }
  ),

  NewsImage: sequelize.define(
    "newsImages",
    {
      imageURL: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false, freezeTableName: true, schema }
  ),
};
