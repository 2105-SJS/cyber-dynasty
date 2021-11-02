
const apiRouter = require('express').Router();
const productsRouter = require('./products');

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

apiRouter.use('/products', productsRouter);

apiRouter.use((error, req, res, next) => {
  console.error(error)
  res.status(400)
  res.send(error);
});
module.exports = apiRouter;
