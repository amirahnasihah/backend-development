const errorHandler = (err, req, res, next) => {
  res.status(500);
};

module.exports = { errorHandler };
