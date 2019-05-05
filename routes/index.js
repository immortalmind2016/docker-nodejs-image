var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { section:" 3",name: ' Mohamed Salah hussain ' });
});

module.exports = router;
