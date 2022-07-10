const chalk = require('chalk');
const createHttpError = require('http-errors');

module.exports = {
  errorHandler(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || "Unexpected error occurred";

    console.log(`Error:\nstatus - ${chalk.yellow(status)}\nmessage - ${chalk.red(message)}`);
    res.status(status).json(message);
  },
  notFound(req, res, next) {
    next(createHttpError(404, "API route not found"));
  },
};
