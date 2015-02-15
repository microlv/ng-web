/**
 * Created by Andy.Lv on 2014/12/24.
 */

'use strict';
var express = require('express');
var validator = require('validator');
var auth = require('../middlewares').auth;
var topicDao = require('../dao').topics;
var router = express.Router();
var config = require('../config');

function setUser(req, res) {
    if (config.debug) {
        req.session.user = {
            "_id": "54cdf3f06014f5580bc34441",
            "provider": "github",
            "profileUrl": "https://github.com/microlv",
            "avatar": "https://avatars.githubusercontent.com/u/5182589?v=3",
            "username": "microlv",
            "githubid": "5182589",
            "__v": 0,
            "token": "a86ad7150367397ecf66",
            "isAdmin": true
        };
    }
}

function groupTopics(req, res, next) {
    setUser(req, res);
    topicDao.groupTopics(function (err, docs) {
        if (err) {
            next(err);
        }
        res.send(docs);
    });
}

function getTopicsCategory(req, res, next) {
    topicDao.getTopicsCategory({category: req.params.category}, function (err, docs) {
        if (err) {
            next(err);
        }
        res.send(docs);
    });
}

function getArticleById(req, res, next) {
    topicDao.getArticleById({_id: req.params.id}, function (err, doc) {
        if (err) {
            next(err);
        }
        res.send(doc);
    });
}

function saveArticle(req, res, next) {

    var sessionUser = req.session.user,
        message = {
            noRight: 'you have no right to post a article!',
            errArticle: 'you post a err article!'
        },
        entity = {
            category: safePost(req.body.category),
            transfer: safePost(req.body.transfer),
            title: safePost(req.body.title),
            content: safePost(req.body.content)
        };

    function safePost(str) {
        //return validator.escape(validator.trim(str));
        return validator.trim(str);
    }

    if (!sessionUser) {
        res.send({err: message.noRight});
    }

    if (!entity.category || !entity.transfer || !entity.title || !entity.content) {
        res.send({err: message.errArticle});
    }

    //before save, need validation
    auth.authUser(sessionUser).then(function (d, r) {
        if (r) {
            topicDao.save(entity, function (err, docs) {
                if (err) {
                    next(err);
                }
                res.send({result: "OK"});
            });
        } else {
            res.send({err: message.noRight});
        }
    });
}

module.exports = {
    groupTopics: groupTopics,
    getTopicsCategory: getTopicsCategory,
    getArticleById: getArticleById,
    saveArticle: saveArticle
};
