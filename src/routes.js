const router = require('express').Router();

const  authController = require('./controllers/authControler');
const homeController = require('./controllers/homeController')
router.use('/auth',authController);
router.use(homeController);
module.exports = router;