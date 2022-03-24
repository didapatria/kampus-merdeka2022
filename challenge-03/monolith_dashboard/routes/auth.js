const router = require('express').Router();
const { auth } = require('../controllers');
const checkLogin = require('../middlewares/checkLogin');

router.get('/login', checkLogin, auth.login);
router.post('/login', checkLogin, auth.store.login);
router.get('/logout', auth.logout);

module.exports = router;
