/**
 * Created by Andy.Lv on 2014/12/24.
 */

'use strict';
var express = require('express');
var router = express.Router();

var topicDao = require('../dao/index').topic;

module.exports = {
    groupTopic: function (req, res, next) {
        topicDao.groupTopic(function (err, docs) {
            console.log(docs);
            res.send(docs);
        });
    },
    getTopicByType: function (req, res, next) {
        topicDao.getTopicByType(req.params.type, function (err, docs) {
            if (err) {
                next(err);
            }
            res.send(docs);
        });
    },
    getTopicById: function (id) {


    }
};
