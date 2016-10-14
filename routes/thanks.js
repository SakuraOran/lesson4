var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('thanks', { title: 'Sakura Duff: Contact Me' });
});

module.exports = router;
