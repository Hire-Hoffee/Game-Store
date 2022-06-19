require("dotenv").config();
const path = require("path");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const sequelize = require("./config/database");
const routes = require("./routes");
const { notFound, errorHandler } = require("./middleware/errorHandler");
require("./models");

const PORT = process.env.PORT || 4221;
const VUE_API_URL = process.env.VUE_API_URL || undefined;

const app = express();

app.use(cors({ origin: VUE_API_URL }));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "static")));

app.use("/", routes);

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
