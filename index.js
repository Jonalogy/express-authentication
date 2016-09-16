var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var sesssion  = require('express-session')
var app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/profile', function(req, res) {
  res.render('profile');
});

app.use('/auth', require('./controllers/auth')); //this appends a /auth to route

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialised: true
})) 

SESSION_SECRET=tacocat

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
