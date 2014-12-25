/**
 * Created by Andy.Lv on 2014/12/22.
 */

'use strict';

var topic = require('./controller/topic');

module.exports = function (app) {

	app.get('/topic/list', topic.list);
	app.get('/topic/:type', topic.listByType);
};