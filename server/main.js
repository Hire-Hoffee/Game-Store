require("dotenv").config();
const path = require("path");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require("./config/database");
const routes = require("./routes");
const { notFound, errorHandler } = require("./middleware/errorHandler");
require("./models");

const PORT = process.env.PORT || 4221;
const VUE_API_URL = process.env.VUE_API_URL || undefined;

const app = express();

app.use(cors({ origin: VUE_API_URL, exposedHeaders: ["Update-Token"] }));
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));

app.use("/api", routes);

app.use(notFound, errorHandler);

(async function startServer() {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ alter: true, logging: true });
    console.log("\nDatabase connected");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}\n`));
  } catch (error) {
    console.log(error);
  }
})();
