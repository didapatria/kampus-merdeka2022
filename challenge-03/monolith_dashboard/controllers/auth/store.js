const bycypt = require('bcrypt');
const User = require('../../models/users');

module.exports = {
  login: (req, res) => {
    if (req.body.username === User.username && bycypt.compareSync(req.body.password, User.password)) {
      User.login = true;
      res.redirect('/dashboard');
    } else {
      User.login = false;
      res.render('pages/auth/login', {
        title: 'Login',
        layout: 'layouts/auth',
      });
    }
  },
};
