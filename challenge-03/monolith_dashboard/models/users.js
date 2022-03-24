const bycypt = require('bcrypt');

const User = {
  id: 1, username: 'admin@mail.com', password: bycypt.hashSync('admin!', 10), login: false,
};

module.exports = User;
