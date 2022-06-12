require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const sequelize = require("./config/database");
const routes = require("./routes");
require("./models");

const PORT = process.env.PORT || 4221;
const app = express();

app.use(logger("dev"));

app.use("/", routes);

(async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("\nDatabase connected");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}\n`));
  } catch (error) {
    console.log(error);
  }
})();
