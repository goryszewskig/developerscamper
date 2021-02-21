// @desc logs req to console
const logger = (req, res, next) => {
  req.hello = "hello world";
  console.log(`midd run ${req.method} ${req.protocol} ${new Date()}`);
  next();
};

module.exports = logger;
