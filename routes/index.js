/**
 * Created by Andy.Lv on 2014/11/13.
 */
var layout = require('./layout');
var templates = require('./templates');
var partials = require('./partials');

var express = require('express');
var index = express.Router();

/* GET home page. */
index.get('/', function (req, res) {
    res.render('index');
});

module.exports = function (app) {
    app.use('/', index);
    app.use('/layout', layout);
    app.use('/templates', templates);
    app.use('/partials', partials);
};