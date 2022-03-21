const express = require('express');

const router = express.Router();

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
