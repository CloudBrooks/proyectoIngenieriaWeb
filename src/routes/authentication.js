const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn } = require('../lib/auth');

router.post('/register', passport.authenticate('local.signup', {
    successRedirect: '/home',
    failureRedirect: '/register',
    failureFlash: true
}))

router.post('/login', (req, res, next) => {
    passport.authenticate('local.login', {
        successRedirect: '/home',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});


module.exports = router;