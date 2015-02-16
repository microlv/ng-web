/**
 * Created by Andy.Lv on 2014/12/23.
 */

'use strict';

var Topics = require('../models').Topics;
var _ = require('lodash');

function groupTopics(callback) {
    var data = Topics.aggregate([
        {
            $project: {category: 1}
        },
        {
            $group: {
                _id: '$category',
                count: {$sum: 1}
            }
        }], callback);
}

function getTopicsCategory(category, callback) {
    Topics.find(category, '_id category title visitCount updateAt', callback);
}

function getArticleById(obj, callback) {
    Topics.findOne(obj, function (err, doc) {
        doc.visitCount += 1;
        doc.save(function () {
        });
        callback(err, doc);
    });
}

function save(entity, callback) {
    var topic = new Topics();
    _.extend(topic, entity);
    topic.save(callback);
}

module.exports = {
    groupTopics: groupTopics,
    getTopicsCategory: getTopicsCategory,
    getArticleById: getArticleById,
    save: save
};