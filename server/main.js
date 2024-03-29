require("dotenv").config();
const path = require("path");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const history = require("connect-history-api-fallback");
const sequelize = require("./config/database");
const routes = require("./routes");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const chalk = require("chalk");
require("./models");

const PORT = process.env.PORT || 4221;
const VUE_API_URL = process.env.VUE_API_URL || undefined;

const app = express();

const historyConfig = {
  rewrites: [
    {
      from: /\/verify/,
      to: (context) => context.parsedUrl.pathname,
    },
  ],
};

app.use(
  cors({
    origin: VUE_API_URL,
    exposedHeaders: ["Update-Token", "Token-Expired"],
  })
);
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(history(historyConfig));
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "static")));

app.use("/api", routes);

app.get("/", (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  } catch (error) {
    next(error);
  }
});

app.use(notFound, errorHandler);

(async function startServer() {
  try {
    await sequelize.authenticate();
    console.log(chalk.magenta("\nDatabase connected"));
    app.listen(PORT, () =>
      console.log(chalk.magenta(`Server is running on port ${PORT}\n`))
    );
  } catch (error) {
    console.log(`\nError message - ${chalk.red(error)}\n`);
  }
})();
