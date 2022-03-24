const User = require('../../models/users');

module.exports = {
  login: (req, res) => res.render('pages/auth/login', {
    title: 'Login',
    layout: 'layouts/auth',
  }),

  logout: (req, res) => {
    User.login = false;
    res.render('pages/auth/login', {
      title: 'Logout',
      layout: 'layouts/auth',
    });
  },

  store: require('./store'),
};
