var _ = require('underscore');

var express = require('express');
var index = express.Router();
var router = express.Router();

var requestList = [
    {req: '/header', res: 'layout/header'},
    {req: '/sidebar', res: 'layout/sidebar'},
    {req: '/navigate', res: 'layout/navigate'},
    {req: '/mainframe', res: 'layout/mainframe'},
    {req: '/content', res: 'layout/content'},
    {req: '/search', res: 'layout/search'},
    {req: '/footer', res: 'layout/footer'},
    {req: '/about', res: 'layout/about'}
];

_.forEach(requestList, function (k) {
    router.get(k.req, function (req, res) {
        res.render(k.res);
    });
});

module.exports.layout = router;


/* GET home page. */
index.get('/', function (req, res) {
    res.render('index');
});

module.exports.index = index;

