const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const listRouter = require('./listRouter');

router.use('/user', userRouter);
router.use('/list', listRouter);

module.exports = router;
