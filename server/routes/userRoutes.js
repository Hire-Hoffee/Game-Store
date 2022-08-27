const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const authValidation = require("../middleware/authMiddleware");

router.get("/account", authValidation, userControllers.getUserAccount);
router.post("/add_to_cart/:gameId", authValidation, userControllers.addToCart);
router.get("/cart", authValidation, userControllers.getCartGames);
router.post("/change_amount", authValidation, userControllers.changeAmount);

module.exports = router;
