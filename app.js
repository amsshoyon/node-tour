const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');
const errorController = require('./controllers/errorController');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// 2) ROUTES
app.use(routes);

// 3) Error Handling
app.use(errorController); 

module.exports = app;
