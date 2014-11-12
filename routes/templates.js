/**
 * Created by Andy.Lv on 2014/11/11.
 */

var express = require('express');
var router = express.Router();

router.get('/action-box', function (req, res) {
    res.render('templates/action-box.html');
});

module.exports = router;
