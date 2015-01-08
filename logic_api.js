/**
 * Created by Andy.Lv on 2014/12/22.
 */

'use strict';

var topic = require('./controller/topic');
var auth = require('./api/auth');

var express = require('express');
var router = express.Router();

router.get('/topic/grouptopic', topic.groupTopic);
router.get('/topic/:type', topic.getTopicByType);
router.get('/topic/:type/:id', topic.getTopicById);

router.post('/auth/login', auth.login);
router.post('/auth/reg', auth.reg);

module.exports = router;