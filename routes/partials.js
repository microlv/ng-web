/**
 * Created by Andy.Lv on 2014/11/11.
 */

var express = require('express');
var router = express.Router();

router.get('/dialog-modal', function (req, res) {
    res.render('partials/dialog-modal');
});

router.get('/login', function (req, res) {
    res.render('partials/login');
});

module.exports = router;
