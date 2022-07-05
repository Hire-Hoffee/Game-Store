const router = require("express").Router();

const mainRoutes = require("./mainRoutes");
const authRoutes = require("./authRoutes");

router.use("/main", mainRoutes);
router.use("/auth", authRoutes);

module.exports = router;
