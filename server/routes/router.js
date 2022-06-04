const router = require("express").Router();
const mainController = require("../controllers/controllers");

router.get("/", mainController.main);

module.exports = router;
