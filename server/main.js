require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const sequelize = require("./config/database");
const routes = require("./routes/router");
require("./models");

const PORT = process.env.PORT || 4221;
const app = express();

app.use(logger("dev"));
app.use(cors());

app.use("/api", routes);

(async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("\nDatabase connected");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}\n`));
  } catch (error) {
    console.log(error);
  }
})();
