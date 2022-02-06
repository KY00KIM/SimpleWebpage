const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const router = require('./router');
const { errorHandler } = require('./lib/error-handler');
const { application } = require('express');


app.use ('/', router);
app.use(errorHandler);

module.exports = app;