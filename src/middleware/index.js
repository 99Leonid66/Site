const { render } = require('./nuxt');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  
  app.use((req, res, next) => {
    switch (req.accepts('html', 'json')) {
    case 'json': {
      next();
      break;
    }
    default: {
      render(req, res, next);
    }
    }
  });
};
