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

    if (req.body._id) {
        entity._id = req.body._id;
    }

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
            topicDao.findOne({_id: entity._id}, function (err, doc) {
                if (err) {
                    return next(err);
                }
                d.resolve(doc);
            });
        } else {
            res.send({err: message.noRight});
        }
    }).then(function (d, doc) {
        if (doc) {
            doc.category = entity.category;
            doc.transfer = entity.transfer;
            doc.title = entity.title;
            doc.content = entity.content;
            doc.save(function (err) {
                res.send({result: "OK"});
            });
        } else {
            topicDao.save(entity, function (err, doc) {
                if (err) {
                    return next(err);
                }
                res.send({result: "OK"});
            });
        }
    });
}

function deleteArticle(req, res, next) {

    var sessionUser = req.session.user,
        message = {
            noRight: 'you have no right to delete a article!',
            errArticle: 'you delete a err article!'
        };

    if (!sessionUser) {
        res.send({err: message.noRight});
    }

    //before save, need validation
    auth.authUser(sessionUser).then(function (d, r) {
        if (r) {
            d.resolve();
        } else {
            res.send({err: message.noRight});
        }
    }).then(function () {
        topicDao.findOne({_id: req.body._id}, function (err, doc) {
            if (err) {
                return next(err);
            }
            doc.remove();
            doc.save(function (err) {
                res.send({result: "OK"});
            });
        });
    });
}

module.exports = {
    groupTopics: groupTopics,
    getTopicsCategory: getTopicsCategory,
    getArticleById: getArticleById,
    saveArticle: saveArticle,
    deleteArticle: deleteArticle
};
