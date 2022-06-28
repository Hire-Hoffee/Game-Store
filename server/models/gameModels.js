const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const schema = "gameSchema";

module.exports = {
  Game: sequelize.define(
    "game",
    {
      gameTitle: { type: DataTypes.STRING, allowNull: false, unique: true },
      description: { type: DataTypes.TEXT, allowNull: false },
      releaseDate: { type: DataTypes.DATEONLY, allowNull: false },
      rating: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      price: { type: DataTypes.INTEGER },
      poster: {
        type: DataTypes.STRING,
        defaultValue: "/images/supportImages/posterNotFound.png",
      },
      trailer: {
        type: DataTypes.STRING,
        defaultValue: "/images/supportImages/imgNotFound.png",
      },
    },
    { timestamps: false, schema }
  ),

  Genre: sequelize.define(
    "genre",
    {
      genreName: { type: DataTypes.STRING, allowNull: false, unique: true },
      genreSVG: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "/images/supportImages/defaultCategory.svg",
      },
    },
    { timestamps: false, schema }
  ),

  Image: sequelize.define(
    "image",
    {
      imageURL: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "/images/supportImages/imgNotFound.png",
      },
    },
    { timestamps: false, schema }
  ),

  Developer: sequelize.define(
    "developer",
    {
      developerName: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    { timestamps: false, schema }
  ),

  MinimumSR: sequelize.define(
    "minimumSR",
    {
      os: { type: DataTypes.STRING, allowNull: false },
      processor: { type: DataTypes.STRING, allowNull: false },
      graphics: { type: DataTypes.STRING, allowNull: false },
      memory: { type: DataTypes.STRING, allowNull: false },
      storage: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false, schema }
  ),

  RecommendedSR: sequelize.define(
    "recommendedSR",
    {
      os: { type: DataTypes.STRING, allowNull: false },
      processor: { type: DataTypes.STRING, allowNull: false },
      graphics: { type: DataTypes.STRING, allowNull: false },
      memory: { type: DataTypes.STRING, allowNull: false },
      storage: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false, schema }
  ),

  GameKey: sequelize.define(
    "gameKey",
    {
      key: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    { timestamps: false, schema }
  ),

  Platform: sequelize.define(
    "platform",
    {
      platformName: { type: DataTypes.STRING, allowNull: false, unique: true },
      platformSVG: { type: DataTypes.STRING },
    },
    { timestamps: false, schema }
  ),
};
