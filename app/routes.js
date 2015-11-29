module.exports = function(app) {

  //Home route
  app.get('/', require('./controllers/HomeCtrl.js'));
  app.get('/home', require('./controllers/HomeCtrl.js'));
  app.get('/index', require('./controllers/HomeCtrl.js'));

};
