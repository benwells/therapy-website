var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('jade'),
  // mongoose = require('mongoose'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

//require routes file
require('./app/routes.js')(app);

//jade config
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

//FOR DEV
// app.use(express.static('public'));

//FOR PRODUCTION
app.use(express.static(__dirname + '/'));


//require routes file
require('./app/routes')(app);

// app.use(function(req, res) {
//   // Use res.sendfile, as it streams instead of reading the file into memory.
//   res.sendfile(__dirname + '/index.html');
// });

// app.use(app.router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));
// app.use(express.static(process.env.OPENSHIFT_REPO_DIR + '/public' ));

// passport config
// var Account = require('./app/models/account');
// passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

// mongoose
// mongoose.connect('mongodb://localhost/passport_local_mongoose_express4');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//server and port
// var port = process.env.PORT || 3000;
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port );
});

// app.listen(server_port);
// console.log("starting server on port", server_port);
