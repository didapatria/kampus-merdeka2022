const router = require('express').Router();
const { dashboard } = require('../controllers');

router.get('/posts', dashboard.post.view);
router.get('/post/create', dashboard.post.create);
router.post('/post/create', dashboard.post.store.create);
router.get('/post/update/:id', dashboard.post.update);
router.post('/post/update/:id', dashboard.post.store.update);
router.get('/post/delete/:id', dashboard.post.destroy);

module.exports = router;
