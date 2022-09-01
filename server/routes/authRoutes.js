const router = require("express").Router();
const authControllers = require("../controllers/authControllers");
const authValidation = require("../middleware/authMiddleware");

router.post("/registration", authControllers.userRegistration);
router.post("/login", authControllers.userLogin);
router.post("/logout", authValidation, authControllers.userLogout);
router.get("/verify", authControllers.emailVerifying);

module.exports = router;
