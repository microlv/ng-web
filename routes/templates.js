/**
 * Created by Andy.Lv on 2014/11/11.
 */

var express = require('express');
var router = express.Router();

router.get('/about', function (req, res) {
    res.render('templates/about');
});

router.get('/article', function (req, res) {
    res.render('templates/article');
});

router.get('/action-box', function (req, res) {
    res.render('templates/action-box');
});

module.exports = router;
