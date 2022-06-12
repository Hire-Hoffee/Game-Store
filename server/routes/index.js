const router = require("express").Router();
const mainRoutes = require("./mainRoutes");

router.use("/api", mainRoutes);

module.exports = router;
