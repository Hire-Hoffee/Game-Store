const router = require("express").Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.getMainPage);
router.get("/games", mainControllers.getAllGames);
router.get("/games/:title", mainControllers.getGameInfo);
router.get("/categories", mainControllers.getAllCategories);
router.get("/news", mainControllers.getGamesNews);

module.exports = router;
