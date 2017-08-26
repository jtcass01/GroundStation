'user strict';

//npm-modules
const express = require('express');
const http = require('http');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

// Create Routes
const routes = require('./routes/index')

// Setup view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

// Setup routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use((request, response, next) => {
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.listen(port, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log('server is listening on ' + port);
});