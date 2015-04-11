
module.exports = function(app) {

  //Home route
  app.get('/', require('./controllers/HomeCtrl.js'));

};
