module.exports = {
  notFound: (req, res) => res.render('pages/default/not-found', { title: 'Not Found' }),
  exception: (req, res) => res.render('pages/default/exception', { title: 'Exception' }),

  dashboard: require('./dashboard'),
  auth: require('./auth'),
};
