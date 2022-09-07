const router = require("express").Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.getMainPage);
router.get("/games", mainControllers.getAllGames);
router.get("/games/:title", mainControllers.getGameInfo);
router.get("/categories", mainControllers.getAllCategories);
router.get("/news", mainControllers.getGamesNews);
router.get("/news/content/:newsId", mainControllers.getNewsContent);
router.get("/search", mainControllers.searchGames);
router.get("/search_by_genre", mainControllers.searchGamesOnGenres);
router.get("/search_by_filter", mainControllers.searchByFilter);

module.exports = router;
