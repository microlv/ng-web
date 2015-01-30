/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';

var crypto = require('crypto');

var user = require('../dao').user;
var config = require('../config');

function encrypt(str, secret) {
    var cipher = crypto.createCipher('aes192', secret);
    var enc = cipher.update(str, 'utf8', 'hex');
    enc += cipher.final('hex');
    return enc;
}

function encryptSession(user, res) {
    var auth_token = encrypt(user._id + '\t' + user.loginname + '\t' + user.pass + '\t' + user.email, config.session_secret);
    res.cookie(config.auth_cookie_name, auth_token, {path: '/', maxAge: 1000 * 60 * 60 * 24 * 30}); //cookie 有效期30天
}

module.exports = {};