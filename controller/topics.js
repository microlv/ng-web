/**
 * Created by Andy.Lv on 2014/12/24.
 */

'use strict';
var express = require('express');
var router = express.Router();

var topicDao = require('../dao').topics;

module.exports = {
    groupTopics: function (req, res, next) {
        topicDao.groupTopics(function (err, docs) {
            if (err) {
                next(err);
            }
            res.send(docs);
        });
    },
    getTopicsCategory: function (req, res, next) {
        topicDao.getTopicsCategory({category: req.params.category}, function (err, docs) {
            if (err) {
                next(err);
            }
            res.send(docs);
        });
    },
    getArticleById: function (req, res, next) {
        topicDao.getArticleById({_id: req.params.id}, function (err, docs) {
            if (err) {
                next(err);
            }
            console.log(req.session.user);
            res.send(docs);
        });
    },
    saveArticle: function (req, res, next) {
        //before save, need validation

        if (req.session.user) {
            res.send({err: 'you have no right to post a article!'});
            return;
        }

        topicDao.save(req.params, function (err, docs) {
            if (err) {
                next(err);
            }
            res.send(docs);
        });
    }
};
