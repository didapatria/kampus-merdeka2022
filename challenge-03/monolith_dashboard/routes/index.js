const router = require('express').Router();
const controller = require('../controllers')
const auth = require('./auth');
const dashboard = require('./dashboard');
const posts = require('./posts');
const checkUser = require('../middlewares/checkUser');

router.use('/', auth);

router.use(checkUser);

router.use('/', dashboard);
router.use('/dashboard', posts);

router.use(controller.notFound);
router.use(controller.exception);

module.exports = router;
