var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome_page', { title: 'Cameron Massey' });
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Cameron Massey' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Cameron Massey' });
});

module.exports = router;
