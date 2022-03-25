const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayout = require('express-ejs-layouts');

const moment = require('moment');
const flash = require('connect-flash');
const session = require('express-session');
const toastr = require('express-toastr');
const fileUpload = require('express-fileupload');

const router = require('./routes');

const app = express();

require('dotenv').config();
const { LocalStorage } = require('node-localstorage');

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('layout', 'layouts/default');

// Dependencies
app.use(cookieParser('secret'));
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
  user: null,
}));
app.use(flash());
app.use(toastr({
  positionClass: 'toast-top-right',
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

app.use((req, res, next) => {
  res.locals.toasts = req.toastr.render();
  next();
});

app.use((req, res, next) => {
  res.locals.moment = moment;
  next();
});

// error handler
app.use((err, req, res, next) => {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');

app.use(router);

module.exports = app;
