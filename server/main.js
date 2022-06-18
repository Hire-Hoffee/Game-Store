require("dotenv").config();
const path = require("path");
const express = require("express");
const logger = require("morgan");
const sequelize = require("./config/database");
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
require("./models");

const PORT = process.env.PORT || 4221;
const app = express();

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "static")));

app.use("/", routes);

app.use(errorHandler);

(async function startServer() {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ alter: true, logging: false });
    console.log("\nDatabase connected");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}\n`));
  } catch (error) {
    console.log(error);
  }
})();
