/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';
var User = require('../models').User;
var crypto = require('crypto');
var _ = require('lodash');

module.exports = {
    findOne: function (obj, cb) {
        User.findOne(obj, cb);
    },
    save: function (obj, cb) {
        var user = new User();
        _.extend(user, obj);
        user.save(cb);
    }
    //findOrCreate: function (obj, cb) {
    //    User.findOne({id: obj.githubId}, function (err, user) {
    //        if (err) {
    //            return;
    //        }
    //    });
    //}
};