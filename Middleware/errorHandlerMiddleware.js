const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  return res
    .status(500)
    .json({ msg: `something wait wrong, please try again letter` });
};

module.exports = errorHandlerMiddleware;
