const path = require('path');
const fs = require('fs');
const Car = require('../../models/car');

module.exports = {
  view: (req, res) => {
    res.render('pages/dashboard/post', {
      car: Car,
      title: 'List Car',
      layout: 'layouts/dashboard',
    });
  },

  create: (req, res) => {
    res.render('pages/dashboard/form', {
      title: 'Add New Car',
      layout: 'layouts/dashboard',
    });
  },

  update: (req, res) => {
    const foundIndex = Car.findIndex((x) => x.id === parseInt(req.params.id));
    res.render('pages/dashboard/form', {
      title: 'Update Car',
      layout: 'layouts/dashboard',
      dataUpdate: Car[foundIndex],
    });
  },

  destroy: (req, res, next) => {
    const foundIndex = Car.findIndex((x) => x.id === parseInt(req.params.id));
    if (Car[foundIndex].image !== '/images/car.png') {
      fs.unlinkSync(path.join(__dirname, '../../public') + Car[foundIndex].image);
    }
    Car.splice(foundIndex, 1);

    req.toastr.info('Data Berhasil Dihapus');
    res.redirect('/dashboard/posts');
  },

  store: require('./store'),
};
