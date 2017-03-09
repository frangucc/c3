var express = require('express');
var router = express.Router();
var products = require('../services/products')
var categories = require('../services/categories.js')
var brands = require('../services/brands')

router.get('/', function(req, res) {
  res.render('index')
});

router.get('/index-fullscreen-slider', function(req ,res) {
  res.render('index-fullscreen-slider');
});

router.get('/index-services', function(req, res) {
  res.render('index-services');
});

router.get('/index-new', function(req, res) {
  res.render('index-new');
});
