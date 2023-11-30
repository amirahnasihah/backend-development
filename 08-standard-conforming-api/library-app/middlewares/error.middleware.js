// custom middleware
const errorHandler = (err, req, res, next) => {
  res.status(500);
};
