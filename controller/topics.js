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
    //before save, need validation
    //if (!auth.authUser(req, res)) {
    //    res.send({err: 'you have no right to post a article!'});
    //}
    function safePost(str) {
        //return validator.escape(validator.trim(str));
        return validator.trim(str);
    }

    var entity = {
        category: safePost(req.body.category),
        title: safePost(req.body.title),
        content: safePost(req.body.content)
    };

    if (!entity.category || !entity.title || !entity.content) {
        res.send({err: 'you post a err article!'});
    }

    topicDao.save(entity, function (err, docs) {
        if (err) {
            next(err);
        }
        res.send({result: "OK"});
    });

    //auth.authUser(req, res, next).then(function (d, r) {
    //    if (r) {
    //        var entity = {
    //            category: safePost(req.body.category),
    //            title: safePost(req.body.title),
    //            content: safePost(req.body.content)
    //        };
    //
    //        topicDao.save(entity, function (err, docs) {
    //            if (err) {
    //                next(err);
    //            }
    //            res.send({result: "OK"});
    //        });
    //    } else {
    //        res.send({err: 'you have no right to post a article!'});
    //    }
    //});
}

module.exports = {
    groupTopics: groupTopics,
    getTopicsCategory: getTopicsCategory,
    getArticleById: getArticleById,
    saveArticle: saveArticle
};
