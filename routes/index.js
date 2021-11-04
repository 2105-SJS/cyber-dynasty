
const apiRouter = require('express').Router();
const productsRouter = require('./products');
// const JWT_SECRET = process.env.JWT_SECRET;
const { JWT_SECRET = "DonNotWell" } = process.env;
const jwt = require('jsonwebtoken');

const { getUserById } = require('../db/users')


apiRouter.use(async (req, res, next) => {
  const prefix = 'Bearer ';
  const auth = req.header('Authorization');
  
  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    
    try {
      const { id } = jwt.verify(token, "DonNotWell");
      
      if (id) {
        req.user = await getUserById(id);
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: 'AuthorizationHeaderError',
      message: `Authorization token must start with ${ prefix }`
    });
  }
});

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

apiRouter.use('/products', productsRouter);

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

const ordersRouter = require('./orders');
const { requireUser } = require('./util');
apiRouter.use('/orders', ordersRouter);

apiRouter.use((error, req, res, next) => {
  console.error(error)
  res.status(400)
  res.send(error);
});
module.exports = apiRouter;
