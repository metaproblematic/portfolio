const express = require('express');
const router = express.Router();

router.use(function timelog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    res.send('Hello World');
});

router.get('/', function (req, res) {
    res.sendStatus('About me');
});

module.exports = router;