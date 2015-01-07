/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';
var User = require('../models').User;
var crypto = require('crypto');

module.exports = {
    auth: function (username, password, callback) {
        User.find({username: username, password: password}, callback);
    },
    find: function (obj, callback) {
        User.find(obj, callback);
    },
    reg: function (username, password, callback) {
        var md5 = crypto.createHash('md5');
        password = md5.update(password).digest('hex');

        //this.find({username: username}, function () {
        //
        //});
        var newUser = new User();

        newUser.username = username;
        newUser.password = password;

        newUser.save(callback);
    }
};