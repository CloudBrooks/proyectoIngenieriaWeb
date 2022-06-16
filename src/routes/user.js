const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/home', (req, res) => {
    res.render('layouts/home.hbs');       
});

router.get('/register', (req, res) => {
    res.render('layouts/register.hbs');
});

router.get('/schedule', (req, res) => {
    res.render('layouts/schedule.hbs');
});

router.post('/schedule', async(req, res) => {
    const { materia, escolaridad, tipoDePago, horario } = req.body;
    const newSchedule = {
        materia,
        escolaridad,
        tipoDePago,
        horario
    };
    await pool.query('INSERT INTO agenda SET ?', [newSchedule]);
    res.redirect('/home');
})

router.get('/login', (req, res) => {
    res.render('layouts/login.hbs');
});


module.exports = router;