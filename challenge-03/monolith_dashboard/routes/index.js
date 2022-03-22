const router = require('express').Router();
const controller = require('../controllers');

// Routes
router.get('/', controller.login);

router.use(controller.notFound);
router.use(controller.exception);

module.exports = router;
