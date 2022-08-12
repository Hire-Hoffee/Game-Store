const router = require("express").Router();
const authControllers = require("../controllers/authControllers");
const authValidation = require("../middleware/authMiddleware");

router.post("/registration", authControllers.userRegistration);
router.get("/verify", authControllers.emailVerifying);
router.post("/login", authControllers.userLogin);
router.post("/logout", authValidation, authControllers.userLogout);

module.exports = router;
