const User = require('../models/users');

module.exports = function checkLogin(req, res, next) {
  if (User.login === false) {
    next();
  } else {
    res.redirect('/dashboard');
  }
};
