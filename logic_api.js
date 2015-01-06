/**
 * Created by Andy.Lv on 2014/12/22.
 */

'use strict';

var topic = require('./controller/topic');
var api = require('./api/auth');

var express = require('express');
var topicRouter = express.Router();

topicRouter.get('/count', topic.count);
topicRouter.get('/:type', topic.getTopicByType);
topicRouter.get('/:type/:id', topic.getTopicById);

var authRouter = express.Router();
authRouter.post('/login', api.login);
authRouter.post('/reg', api.reg);

module.exports = {
	topic: topicRouter,
	auth: authRouter
};