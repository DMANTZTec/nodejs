var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var MySQLStore = require('express-mysql-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var home = require('./routes/home');
var login = require('./routes/login');
var loginSuccess = require('./routes/loginSuccess');
var users = require('./routes/users');
var logout = require('./routes/logout');

var app = express();
var options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'secret',
    database: 'test'
};
var sessionStore = new MySQLStore(options);
app.use(session({
    secret: '2C44-4D44-W',
    store:sessionStore,
   resave: false,
   saveUninitialized: false
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/home', home);
app.use('/login', login);
app.use('/logout', logout);
app.use('/loginSuccess', loginSuccess);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
