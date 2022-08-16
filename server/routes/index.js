const router = require("express").Router();

const mainRoutes = require("./mainRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes")

router.use("/main", mainRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
