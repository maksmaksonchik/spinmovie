const Router = require('express');
const router = new Router();
const listController = require('../controllers/listController');

router.post('/', listController.create);
router.get('/', listController.getAll);

module.exports = router;
