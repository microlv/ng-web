/**
 * Created by Andy.Lv on 2014/12/22.
 */

'use strict';

var topics = require('./controller/topics');
var github = require('./middlewares').github;
var auth = require('./middlewares').auth;

var express = require('express');
var router = express.Router();

router.get('/topics/grouptopics', topics.groupTopics);
router.get('/topics/:category', topics.getTopicsCategory);
router.get('/article/:id', topics.getArticleById);

router.get('/auth/authUser', auth.authUserApi);
router.get('/auth/github', github.githubAuth());
router.get('/auth/github/callback', github.githubAuth({failureRedirect: '/'}), github.githubCallback);

router.post('/saveArticle', topics.saveArticle);
router.post('/deleteArticle', topics.deleteArticle);

module.exports = router;