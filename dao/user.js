/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';
var User = require('../models').User;
var crypto = require('crypto');
var _ = require('lodash');


function findOne(obj, callback) {
    User.findOne(obj, callback);
}

function ext(target, source) {
    target.githubid = source.id;
    target.username = source.username;
    target.avatar = source._json.avatar_url;
    target.email = source.email;
    target.profileUrl = source.profileUrl;
    target.provider = source.provider;
}

function save(obj, callback) {
    var user = new User();
    ext(user, obj);
    user.save(callback);
}

function findOrCreate(profile, callback) {
    User.findOne({githubid: profile.id}, function (err, user) {
        if (err) {
            return err;
        }
        if (user) {
            ext(user, profile);
            user.save(callback);
        } else {
            save(profile, callback);
        }
    });
}

module.exports = {
    findOne: findOne,
    save: save,
    findOrCreate: findOrCreate
};