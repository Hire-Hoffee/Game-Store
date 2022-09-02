const {
  Game,
  Genre,
  Image,
  Developer,
  MinimumSR,
  RecommendedSR,
  GameKey,
  Platform,
} = require("./gameModels");

const {
  Customer,
  Payment,
  GameRating,
  Review,
  Cart,
  OrderInfo,
} = require("./userModels");

const { News, NewsImage } = require("./newsModels");

module.exports = [
  // -------------------------- gameModels --------------------------

  Game.belongsToMany(Genre, { through: "gameGenres", timestamps: false }),
  Genre.belongsToMany(Game, { through: "gameGenres", timestamps: false }),

  Game.hasMany(Image),
  Image.belongsTo(Game),

  Developer.hasMany(Game),
  Game.belongsTo(Developer),

  Game.hasOne(MinimumSR),
  MinimumSR.belongsTo(Game),

  Game.hasOne(RecommendedSR),
  RecommendedSR.belongsTo(Game),

  Game.belongsToMany(Platform, { through: "gamePlatforms", timestamps: false }),
  Platform.belongsToMany(Game, { through: "gamePlatforms", timestamps: false }),

  Game.hasMany(GameKey),
  GameKey.belongsTo(Game),

  Platform.hasMany(GameKey),
  GameKey.belongsTo(Platform),

  // -------------------------- userModels --------------------------

  Customer.hasOne(Payment),
  Payment.belongsTo(Customer),

  Customer.belongsToMany(Game, { through: Review }),
  Game.belongsToMany(Customer, { through: Review }),
  Customer.hasMany(Review),
  Review.belongsTo(Customer),
  Game.hasMany(Review),
  Review.belongsTo(Game),

  Customer.belongsToMany(Game, { through: GameRating }),
  Game.belongsToMany(Customer, { through: GameRating }),

  Customer.hasOne(Cart),
  Cart.belongsTo(Customer),

  Cart.belongsToMany(Game, { through: OrderInfo }),
  Game.belongsToMany(Cart, { through: OrderInfo }),

  // -------------------------- newsModels --------------------------

  News.hasMany(NewsImage),
  NewsImage.belongsTo(News),
];
