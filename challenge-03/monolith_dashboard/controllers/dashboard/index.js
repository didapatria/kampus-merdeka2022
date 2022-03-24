module.exports = {
  view: (req, res) => {
    const locals = {
      title: 'Dashboard',
      layout: 'layouts/dashboard',
    };
    res.render('pages/dashboard/index', locals);
  },

  post: require('./post'),
};
