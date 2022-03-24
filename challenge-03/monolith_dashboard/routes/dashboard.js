const router = require('express').Router();
const { dashboard } = require('../controllers');

router.get('/dashboard', dashboard.view);

module.exports = router;
