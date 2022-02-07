const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const router = require('./router');
const { errorHandler } = require('./lib/error-handler');
const { application } = require('express');

const router = require('./router');

app.set('views', `${__dirname}/../views`);
app.set('view engine', 'pug');

app.use(express.static(`${__dirname}/../public`));
app.use('/', router);



module.exports = app;