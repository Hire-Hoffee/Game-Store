const router = require("express").Router();
const { home, allGames, allCategories, gameInfo } = require("../controllers");

router.get("/", home);
router.get("/games", allGames);
router.get("/games/:title", gameInfo);
router.get("/categories", allCategories);

module.exports = router;
