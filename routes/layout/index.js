var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/header', function (req, res) {
    res.render('header');
});

router.get('/sidebar', function (req, res) {
    res.render('sidebar');
});

router.get('/navigate', function (req, res) {
    res.render('navigate');
});

router.get('/mainframe', function (req, res) {
    res.render('mainframe');
});

router.get('/content', function (req, res) {
    res.render('content');
});

router.get('/search', function (req, res) {
    res.render('search');
});

router.get('/footer', function (req, res) {
    res.render('footer');
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/login', function (req, res) {
    res.render('partials/login');
});


module.exports = router;
