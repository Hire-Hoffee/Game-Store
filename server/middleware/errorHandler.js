const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Unexpected error occurred";

  console.log(`Error: \n status - ${status} \n message - ${message}`);

  return res.status(status).json({ message });
};

const notFound = (req, res, next) => {
  console.log("Error: Api route not found");
  return res.status(404).json({ message: "Api route not found" });
};

module.exports = { notFound, errorHandler };
