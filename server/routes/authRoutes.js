const router = require("express").Router();
const authControllers = require("../controllers/authControllers");

router.post("/registration", authControllers.userRegistration);
router.post("/login", authControllers.userLogin);
router.post("/logout", authControllers.userLogout);

module.exports = router;
