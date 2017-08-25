'user strict';

const express = require('express');
const http = require('http');
var path = require('path');


const port = process.env.PORT || 8080;
const app = express();

console.log(__dirname + 'views');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
    response.render('index', { title: 'RCR Ground Station' });
});

app.listen(port, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log('server is listening on ' + port);
});