var HomeCtrl = function (req, res) {
  // res.send({"message": "API IS RUNNING"});
  res.render('home/home-template', { title: 'Hey', message: 'Hello there!'});
};

module.exports = HomeCtrl;
