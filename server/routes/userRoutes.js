const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const authValidation = require("../middleware/authMiddleware");

router.get("/account", authValidation, userControllers.getUserAccount);

module.exports = router;
