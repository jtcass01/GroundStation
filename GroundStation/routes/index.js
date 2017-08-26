'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (request, response) => {
    response.render('welcome/index', { title: 'RCR Ground Station' });
});

router.get('/welcome', (request, response) => {
    response.render('welcome/index', { title: 'RCR Ground Station' });
});

module.exports = router;


