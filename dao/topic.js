/**
 * Created by Andy.Lv on 2014/12/23.
 */

'use strict';

var Topic = require('../models').Topic;
var User = require('../models').User;
module.exports = {
    groupTopic: function (callback) {
        var data = Topic.aggregate([
            {$project: {type: 1}},
            {
                $group: {
                    _id: '$type',
                    count: {$sum: 1}
                }
            }], callback);
        //console.log(data);
    },
    getTopic: function (category, callback) {

        User.find({}, function (err, docs) {
            console.log(docs);
        });
        Topic.find({}, function (err, docs) {
            console.log(docs);
        });
    }
};