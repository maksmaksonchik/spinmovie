const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const checkAuthMiddleware = require('../middleware/checkAuthMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', checkAuthMiddleware, userController.check);

module.exports = router;
