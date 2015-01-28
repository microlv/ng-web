/**
 * Created by Andy.Lv on 2014/12/23.
 */

'use strict';

var Topics = require('../models').Topics;

module.exports = {
    groupTopics: function (callback) {
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
    },
    getTopicsCategory: function (category, callback) {
        Topics.find(category, '_id category title visitCount updateAt', callback);
    },
    getArticleById: function (id, callback) {
        Topics.find({_id: id}, callback);
    }
};