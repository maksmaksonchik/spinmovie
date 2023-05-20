const Router = require('express');
const router = new Router();
const listController = require('../controllers/listController');
const checkAuthMiddleware = require('../middleware/checkAuthMiddleware');

router.get('/', listController.getTeamCollections);
router.post('/', checkAuthMiddleware, listController.create);

module.exports = router;
