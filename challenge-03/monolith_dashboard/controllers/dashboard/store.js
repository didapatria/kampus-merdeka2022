const path = require('path');
const fs = require('fs');
const moment = require('moment');
const Car = require('../../models/car');

module.exports = {
  create: (req, res, next) => {
    const id = Car.length > 0 ? Car[Car.length - 1].id + 1 : 1;

    if (!req.body.name) {
      req.toastr.error('Nama tidak boleh kosong');
      return res.redirect('/dashboard/posts');
    }
    if (!req.body.price) {
      req.toastr.error('Harga tidak boleh kosong');
      return res.redirect('/dashboard/posts');
    }
    if (!req.files || Object.keys(req.files).length === 0) {
      req.toastr.error('Gambar tidak boleh kosong');
      return res.redirect('/dashboard/posts');
    }

    const images = req.files.image;
    images.mv(path.join(__dirname, '../../public/upload/') + id + images.name);

    const startRent = moment(req.body.start_rent);
    const finishRent = moment(req.body.finish_rent);
    const updateAt = moment().toDate();
    const createdAt = moment().toDate();

    const uploaded = `/upload/${id}${images.name}`;
    Car.push({
      id, name: req.body.name, price: req.body.price, image: uploaded, start_rent: startRent, finish_rent: finishRent, update_at: updateAt, created_at: createdAt,
    });
    req.toastr.success('Data Berhasil Disimpan');

    res.redirect('/dashboard/posts');
  },

  update: (req, res, next) => {
    const foundIndex = Car.findIndex((x) => x.id === parseInt(req.params.id));
    
    if (!req.body.name) {
      req.toastr.error('Nama tidak boleh kosong');
      return res.redirect('/dashboard/posts');
    }
    if (!req.body.price) {
      req.toastr.error('Harga tidak boleh kosong');
      return res.redirect('/dashboard/posts');
    }
    
    if (req.files) {
      if (Car[foundIndex].image !== '/images/car.png') {
        fs.unlinkSync(path.join(__dirname, '../../public') + Car[foundIndex].image);
      }
      const images = req.files.image;
      images.mv(path.join(__dirname, '../../public/upload/') + Car[foundIndex].id + images.name);
      const uploaded = `/upload/${Car[foundIndex].id}${images.name}`;
      Car[foundIndex].image = uploaded;
    }

    const startRent = moment(req.body.start_rent);
    const finishRent = moment(req.body.finish_rent);
    const updateAt = moment().toDate();

    Car[foundIndex].name = req.body.name;
    Car[foundIndex].price = req.body.price;
    Car[foundIndex].start_rent = startRent;
    Car[foundIndex].finish_rent = finishRent;
    Car[foundIndex].updated_at = updateAt;

    req.toastr.success('Data Berhasil Diubah');
    res.redirect('/dashboard/posts');
  },
};
