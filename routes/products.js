var express = require('express')
var router = express.Router()
var products = require('../services/products')

/* router params */
router.param('slug', function (req, res, next, slug) {
  products.getProduct(slug).then(function (product) {
    req.product = product.items[0]
    next()
  })
})

router.use(function (req, res, next) {
  products.getProducts().then(function (productCollection) {
    req.products = productCollection.items
    next()
  })
})

router.get('/products/:slug', function (req, res, next) {
  res.render('product', {title: req.product.fields.productName, product: req.product})
})

router.get('/products', function (req, res, next) {
  res.render('products', {
    'title': 'Products',
    'products': req.products
  })
})

router.get('/', function (req, res, next) {
  res.render('products', {
    'title': 'Products',
    'products': req.products
  })
})

router.get('/home', function(req, res) {
  res.render('index-two')
})

router.get('/franchino', function(req, res) {
  res.render('index-rest');
});

router.get('/index-fullscreen-slider', function(req ,res) {
  res.render('index-fullscreen-slider');
});

router.get('/index-shop', function(req, res) {
  res.render('index-shop');
});


module.exports = router
