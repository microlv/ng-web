/**
 * Created by Andy.Lv on 2014/12/23.
 */

'use strict';

var Topic = require('../models').Topic;

module.exports = {
    groupTopic: function (cb) {
        var data = Topic.aggregate([
            {$project: {type: 1}},
            {
                $group: {
                    _id: '$type',
                    count: {$sum: 1}
                }
            }], cb);
        console.log(data);
    },
    getTopicByType: function (type, cb) {
        Topic.find({type: type}, cb);
    }
};


//
//// and here are the grouping request:
//Flat.aggregate([
//    { $match: {$and: rules } },
//    {
//        $project: {
//            _id: 0, // let's remove bson id's from request's result
//            price: 1, // we need this field
//            district: '$address.district' // and let's turn the nested field into usual field (usual renaming)
//        }
//    },
//    {
//        $group: {
//            _id: '$district', // grouping key - group by field district
//            minPrice: { $min: '$price'}, // we need some stats for each group (for each district)
//            maxPrice: { $max: '$price'},
//            flatsCount: { $sum: 1 }
//        }
//    }
//], {}, callback);