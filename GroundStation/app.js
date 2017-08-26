'user strict';

const express = require('express');
const http = require('http');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('welcome/index', { title: 'RCR Ground Station' });
});

app.get('/welcome', (request, response) => {
    response.render('welcome/index', { title: 'RCR Ground Station' });
});

app.listen(port, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log('server is listening on ' + port);
});