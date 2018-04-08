var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fancy_home_page', { title: 'Cameron Massey' });
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Cameron Massey' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Cameron Massey' });
});

router.get('/fancy', function(req, res, next) {
  res.render('fancy_home_page', { title: 'Cameron Massey' });
});

router.get('/fancy_resume', function(req, res, next) {
  res.render('fancy_resume', { title: 'Cameron Massey' });
});

router.get('/bike_page', function(req, res, next) {
  res.render('bike_page', { title: 'Cameron Massey' });
});

module.exports = router;
