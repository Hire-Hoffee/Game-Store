const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const schema = "gameSchema";

module.exports = {
  Game: sequelize.define(
    "game",
    {
      gameTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { args: true, msg: "Title cannot be null" },
          notEmpty: { args: true, msg: "Title cannot be empty" },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Description cannot be null" },
          notEmpty: { args: true, msg: "Description cannot be empty" },
          len: {
            args: [10, 500],
            msg: "Description must be between 10 and 500 characters long",
          },
        },
      },
      releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Release date cannot be null" },
          notEmpty: { args: true, msg: "Release date cannot be empty" },
          isDate: { args: true, msg: "Release date must be date" },
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notNull: { args: true, msg: "Rating cannot be null" },
          notEmpty: { args: true, msg: "Rating cannot be empty" },
          isDecimal: { args: true, msg: "Rating must be number" },
          min: { args: 0, msg: "Minimum rating value is 0" },
          max: { args: 10, msg: "Maximum rating value is 10" },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: { isDecimal: { args: true, msg: "Rating must be number" } },
      },
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
      genreName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { args: true, msg: "Genre cannot be null" },
          notEmpty: { args: true, msg: "Genre cannot be empty" },
        },
      },
      genreSVG: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "/images/supportImages/defaultCategory.svg",
        validate: {
          notNull: { args: true, msg: "SVG cannot be null" },
          notEmpty: { args: true, msg: "SVG cannot be empty" },
        },
      },
    },
    { timestamps: false, schema }
  ),

  Image: sequelize.define(
    "image",
    {
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "/images/supportImages/imgNotFound.png",
        validate: {
          notNull: { args: true, msg: "Image cannot be null" },
          notEmpty: { args: true, msg: "Image cannot be empty" },
        },
      },
    },
    { timestamps: false, schema }
  ),

  Developer: sequelize.define(
    "developer",
    {
      developerName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { args: true, msg: "Developer cannot be null" },
          notEmpty: { args: true, msg: "Developer cannot be empty" },
        },
      },
    },
    { timestamps: false, schema }
  ),

  MinimumSR: sequelize.define(
    "minimumSR",
    {
      os: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "OS cannot be null" },
          notEmpty: { args: true, msg: "OS cannot be empty" },
        },
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Processor cannot be null" },
          notEmpty: { args: true, msg: "Processor cannot be empty" },
        },
      },
      graphics: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Graphics cannot be null" },
          notEmpty: { args: true, msg: "Graphics cannot be empty" },
        },
      },
      memory: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Memory cannot be null" },
          notEmpty: { args: true, msg: "Memory cannot be empty" },
          len: {
            args: [5, 10],
            msg: "Memory must be between 5 and 10 characters long",
          },
        },
      },
      storage: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Storage cannot be null" },
          notEmpty: { args: true, msg: "Storage cannot be empty" },
          len: {
            args: [5, 10],
            msg: "Storage must be between 5 and 10 characters long",
          },
        },
      },
    },
    { timestamps: false, schema }
  ),

  RecommendedSR: sequelize.define(
    "recommendedSR",
    {
      os: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "OS cannot be null" },
          notEmpty: { args: true, msg: "OS cannot be empty" },
        },
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Processor cannot be null" },
          notEmpty: { args: true, msg: "Processor cannot be empty" },
        },
      },
      graphics: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Graphics cannot be null" },
          notEmpty: { args: true, msg: "Graphics cannot be empty" },
        },
      },
      memory: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Memory cannot be null" },
          notEmpty: { args: true, msg: "Memory cannot be empty" },
          len: {
            args: [5, 10],
            msg: "Memory must be between 5 and 10 characters long",
          },
        },
      },
      storage: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "Storage cannot be null" },
          notEmpty: { args: true, msg: "Storage cannot be empty" },
          len: {
            args: [5, 10],
            msg: "Storage must be between 5 and 10 characters long",
          },
        },
      },
    },
    { timestamps: false, schema }
  ),

  GameKey: sequelize.define(
    "gameKey",
    {
      key: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { args: true, msg: "Key cannot be null" },
          notEmpty: { args: true, msg: "Key cannot be empty" },
          len: {
            args: [10, 20],
            msg: "Key must be between 10 and 20 characters long",
          },
        },
      },
    },
    { timestamps: false, schema }
  ),

  Platform: sequelize.define(
    "platform",
    {
      platformName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { args: true, msg: "Platform cannot be null" },
          notEmpty: { args: true, msg: "Platform cannot be empty" },
          len: {
            args: [5, 50],
            msg: "Platform must be between 10 and 100 characters long",
          },
        },
      },
      platformSVG: { type: DataTypes.STRING },
    },
    { timestamps: false, schema }
  ),
};
