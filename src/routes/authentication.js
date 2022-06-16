const express = require('express');
const router = express.Router();
const pool = require('../database');
const helpers = require('../lib/helpers');

router.post('/register', async(req, res) => {
    const { userLastName, userName, email, pwd } = req.body;
    const newUser = {
        userLastName,
        userName,
        email,
    };
    newUser.pwd = await helpers.encryptPassword(pwd);
    await pool.query('INSERT INTO usuario SET ?', [newUser]);
    res.redirect('/home');
});

router.post('/login', async(req, res) => {
    const {email, pwd} = req.body;
    const newUser = {
        email
    }
    const rows = await pool.query('Select * from usuario where email = ?', [email]);
    const login = await helpers.matchPassword(pwd, rows[0].pwd);    
    if (login) {
        res.redirect('/home',);
    }

});


module.exports = router;