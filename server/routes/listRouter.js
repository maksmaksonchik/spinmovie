const Router = require('express');
const router = new Router();
const listController = require('../controllers/listController');
const checkAuthMiddleware = require('../middleware/checkAuthMiddleware');

router.get('/', checkAuthMiddleware, listController.getUserCollections);
router.post('/', checkAuthMiddleware, listController.create);
router.get('/team', listController.getTeamCollections);

module.exports = router;

