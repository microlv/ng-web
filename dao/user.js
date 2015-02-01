/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';
var User = require('../models').User;
var crypto = require('crypto');
var _ = require('lodash');


function findOne(obj, cb) {
    User.findOne(obj, cb);
}

function ext(target, source) {
    target.githubid = source.id;
    target.username = source.username;
    target.avatar = source._json.avatar_url;
    target.email = source.email;
    target.profileUrl = source.profileUrl;
    target.provider = source.provider;
}

function save(obj, cb) {
    var user = new User();
    ext(user, obj);
    user.save(cb);
}

function findOrCreate(profile, cb) {
    User.findOne({githubid: profile.id}, function (err, user) {
        if (err) {
            return err;
        }
        if (user) {
            ext(user, profile);
            user.save(cb);
        } else {
            save(profile, cb);
        }
    });
}

module.exports = {
    findOne: findOne,
    save: save,
    findOrCreate: findOrCreate
};