var express = require('express');
var router = express.Router();

router.get('/header', function (req, res) {
    res.render('layout/header');
});

router.get('/sidebar', function (req, res) {
    res.render('layout/sidebar');
});

router.get('/navigate', function (req, res) {
    res.render('layout/navigate');
});

router.get('/mainframe', function (req, res) {
    res.render('layout/mainframe');
});

router.get('/content', function (req, res) {
    res.render('layout/content');
});

router.get('/search', function (req, res) {
    res.render('layout/search');
});

router.get('/footer', function (req, res) {
    res.render('layout/footer');
});

router.get('/about', function (req, res) {
    res.render('layout/about');
});

module.exports = router;
