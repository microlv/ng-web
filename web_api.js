/**
 * Created by Andy.Lv on 2014/12/16.
 */

var _ = require('lodash');
var express = require('express');

function routerStrategy(routerConfig) {
	var router = express.Router();
	_.forEach(routerConfig, function (k) {
		router.get(k.req, function (req, res) {
			res.render(k.res);
		});
	});
	return router;
}

/* GET home page. */
var indexRequest = [{req: '/', res: 'index'}];

var layoutRequest = [
	{req: '/header', res: 'layout/header'},
	{req: '/sidebar', res: 'layout/sidebar'},
	{req: '/navigate', res: 'layout/navigate'},
	{req: '/mainframe', res: 'layout/mainframe'},
	{req: '/content', res: 'layout/content'},
	{req: '/search', res: 'layout/search'},
	{req: '/footer', res: 'layout/footer'},
	{req: '/about', res: 'layout/about'}
];

var partialsRequest = [
	{req: '/dialog-modal', res: 'partials/dialog-modal'},
	{req: '/login', res: 'partials/login'}
];

var templatesRequest = [
	{req: '/about', res: 'templates/about'},
	{req: '/article', res: 'templates/article'},
	{req: '/action-box', res: 'templates/action-box'}
];

//module.exports = {
//	index: routerStrategy(indexRequest),
//	layout: routerStrategy(layoutRequest),
//	partials: routerStrategy(partialsRequest),
//	templates: routerStrategy(templatesRequest)
//};

module.exports=function(app) {
	app.use('/', routerStrategy(indexRequest));
	app.use('/layout', routerStrategy(layoutRequest));
	app.use('/templates', routerStrategy(partialsRequest));
	app.use('/partials', routerStrategy(templatesRequest));
};