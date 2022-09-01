const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const authValidation = require("../middleware/authMiddleware");

router.get("/account", authValidation, userControllers.getUserAccount);
router.post("/add_to_cart/:gameId", authValidation, userControllers.addToCart);
router.post("/delete_from_cart/:gameId", authValidation, userControllers.deleteFromCart);
router.get("/cart", authValidation, userControllers.getCartGames);
router.post("/change_amount", authValidation, userControllers.changeAmount);
router.post("/post_review/:gameId", authValidation, userControllers.postReview);

module.exports = router;
