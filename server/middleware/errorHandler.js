const chalk = require("chalk");
const createHttpError = require("http-errors");

module.exports = {
  errorHandler(err, req, res, next) {
    console.log(
      `Error:\nstatus - ${chalk.yellow(err.status)}\nmessage - ${chalk.red(
        err.message
      )}`
    );
    if (createHttpError.isHttpError(err)) {
      return res.status(err.status).json({ message: err.message });
    }
    return res
      .status(500)
      .json({ message: "Unexpected server error occurred" });
  },
  notFound(req, res, next) {
    next(createHttpError(404, `API route ${chalk.magenta(req.url)} not found`));
  },
};
