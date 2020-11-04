var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');

router.get('/', function(req, res, next) {
  res.render('articles/index', { title: 'Blog' });
});

router.get('/:slug', function(req, res, next) {
  res.render('articles/view', { title: 'Article View' });
});

router.get('/app', function(req, res, next) {
  res.render('articles/app', { title: 'Content Management System' });
});

module.exports = router;