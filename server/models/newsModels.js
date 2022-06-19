const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const schema = "newsSchema";

module.exports = {
  News: sequelize.define(
    "news",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      poster: { type: DataTypes.STRING, defaultValue: "/images/supportImages/imgNotFound.png" },
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
