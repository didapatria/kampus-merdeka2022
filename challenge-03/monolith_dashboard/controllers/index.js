module.exports = {
  login: (req, res) => res.render('pages/default/login', {title: 'Login Monolith Dashboard'}),
  notFound: (req, res) => res.render('pages/default/not-found', {title: 'Not Found'}),
  exception: (req, res) => res.render('pages/default/exception', {title: 'Exception'}),
};
