const router = require("express").Router();
const MainControllers = require("../controllers/mainControllers");

router.get("/", MainControllers.getMainPage);
router.get("/games", MainControllers.getAllGames);
router.get("/games/:title", MainControllers.getGameInfo);
router.get("/categories", MainControllers.getAllCategories);
router.get("/news", MainControllers.getGamesNews);

module.exports = router;