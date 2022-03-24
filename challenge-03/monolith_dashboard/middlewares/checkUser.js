const User = require('../models/users');

module.exports = (req, res, next) => {
  if (User.login === true) {
    next();
  } else {
    res.redirect('/login');
  }
};
