const User = require('../db/models/User');

exports.login = (req, res) => {
  User.findOne(
    {
      username: req.body.username,
    },
    () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        success: true,
        status: 'You are successfully logged in!',
      });
    },
  );
};

exports.logout = (req, res, next) => {
  if (req.session) {
    req.logout();
    req.session.destroy(err => {
      if (err) {
        next(err);
      } else {
        res.clearCookie('session-id');
        res.json({
          message: 'You are successfully logged out!',
        });
      }
    });
  } else {
    const err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
};
