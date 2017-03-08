var express = require('express');
var router = express.Router();
var products = require('../services/products')
var categories = require('../services/categories.js')
var brands = require('../services/brands')

router.get('/home', function(req, res) {
  res.render('index-two')
});

router.get('/franchino', function(req, res) {
  res.render('index-rest');
});

router.get('/index-fullscreen-slider', function(req ,res) {
  res.render('index-fullscreen-slider');
});

router.get('/index-shop', function(req, res) {
  res.render('index-shop');
});
