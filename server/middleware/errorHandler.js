const errorHandler = (err, req, res, next) => {
  const status = err.status;
  const message = err.message;

  console.log(`Error: \n status -- ${status} \n message -- ${message}`);

  if (status == 404) {
    return res.status(status).json({ message: "Not found" });
  }
  if (status == 403) {
    return res.status(status).json({ message: "Access forbidden" });
  }
  if (status == 500) {
    return res.status(status).json({ message: "Server error" });
  }
  if (!status) {
    return res.status(500).json({ message: "Unexpected server error" });
  }

  return res.status(status).json({ message: "Error occurred" });
};

module.exports = errorHandler;
