const router = require('express').Router();
const authService = require('../services/authService')

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.get('/login', (req, res) => {
    res.render('auth/login')
});

router.post('/register', async (req, res) => {
    let { name, username, password, rePassword } = req.body;
    if(password !== rePassword){
        res.locals.error = 'Password missmatch';
        return res.render('auth/register');
    }

    await authService.register({name,username,password,});
    res.redirect('/');
})

module.exports = router;