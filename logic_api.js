/**
 * Created by Andy.Lv on 2014/12/22.
 */

'use strict';

var topic = require('./controller/topic');
var api = require('./api/auth');

var express = require('express');
var topicRouter = express.Router();

topicRouter.get('/list', topic.list);
topicRouter.get('/:type', topic.listByType);

var apiRouter = express.Router();
apiRouter.post('/login', api.login);

module.exports = {
	topic: topicRouter,
	api: apiRouter
};