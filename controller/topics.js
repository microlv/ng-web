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

function groupTopics(req, res, next) {
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
    topicDao.getArticleById({_id: req.params.id}, function (err, docs) {
        if (err) {
            next(err);
        }

        res.send(docs);
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

    if (!entity.category || !entity.title || !entity.content) {
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
