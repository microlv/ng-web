/**
 * Created by Andy.Lv on 2014/12/16.
 */
'use strict';

var _ = require('lodash');
var express = require('express');
var router = express.Router();

function render(html) {
    return function (req, res) {
        res.render(html);
    };
}

function handleIndex(req, res) {
    //special case for test debug model
    var html = process.env.release === true ? 'index' : 'index_test';
    res.render(html);
}

router.get('/', function (req, res) {
    //special case for test debug model
    var html = !!process.env.release ? 'index' : 'index_test';
    res.render(html);
});
router.get('/templates/about', render('templates/about'));
router.get('/templates/article', render('templates/article'));
router.get('/templates/topic', render('templates/topic'));
router.get('/templates/topic/:category', render('templates/topic-category'));
router.get('/templates/edit-article', render('templates/edit-article'));

router.get('/partials/dialog-modal', render('partials/dialog-modal'));
router.get('/partials/login', render('partials/login'));

module.exports = router;

