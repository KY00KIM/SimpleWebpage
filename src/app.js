const express = require('express');
const router = require('./router');

const app = express();

app.use(express.urlencoded({ extended: true }));


app.set('views', `${__dirname}/../views`);
app.set('view engine', 'pug');

app.use(express.static(`${__dirname}/../public`));
app.use('/', router);

module.exports = app;
