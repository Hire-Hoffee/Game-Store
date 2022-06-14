const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const schema = "newsSchema";

module.exports = {
  News: sequelize.define(
    "news",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      poster: { type: DataTypes.STRING },
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
