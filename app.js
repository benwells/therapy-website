var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  methodOverride = require('jade'),
  mongoose = require('mongoose');

//require routes file
require('./app/routes.js')(app);

//jade config
app.set('views', __dirname + '/app/views')
app.set('view engine', 'jade');

// app.use(express.static(__dirname + '/'));


//require routes file
require('./app/routes')(app);

// app.use(function(req, res) {
//   // Use res.sendfile, as it streams instead of reading the file into memory.
//   res.sendfile(__dirname + '/index.html');
// });

// app.use(app.router);
app.use(express.static(__dirname + '/public'));

//server and port
var port = process.env.PORT || 3000;
app.listen(port);
console.log("starting server on port", port);
