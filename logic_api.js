/**
 * Created by Andy.Lv on 2014/12/22.
 */

'use strict';

var topics = require('./controller/topics');
var passport = require('passport');
var github = require('./middlewares/github');


var express = require('express');
var router = express.Router();

router.get('/topics/grouptopics', topics.groupTopics);
router.get('/topics/:category', topics.getTopicsCategory);
router.get('/article/:id', topics.getArticleById);
router.post('/saveArticle', topics.saveArticle);

//router.post('/auth/login', auth.login);
//router.post('/auth/reg', auth.reg);
router.get('/auth/github', github.githubAuth());
router.get('/auth/github/callback', github.githubAuth({failureRedirect: '/'}), github.githubCallback);

module.exports = router;