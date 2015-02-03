/**
 * Created by Andy.Lv on 2014/12/24.
 */

'use strict';
var express = require('express');
var validator = require('validator');
var topicDao = require('../dao').topics;
var router = express.Router();

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

    if (req.session.user) {
        res.send({err: 'you have no right to post a article!'});
        return;
    }

    var entity = {
        category: validator.trim(req.body.category),
        title: validator.trim(req.body.title),
        content: validator.trim(req.body.content)
    };

    topicDao.save(entity, function (err, docs) {
        if (err) {
            next(err);
        }
        res.send(docs);
    });
}

module.exports = {
    groupTopics: groupTopics,
    getTopicsCategory: getTopicsCategory,
    getArticleById: getArticleById,
    saveArticle: saveArticle
};
