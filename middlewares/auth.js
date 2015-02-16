/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';

var crypto = require('crypto');

var userDao = require('../dao').user;
var config = require('../config');
var $l = require('livejs');

//blow code copy from cnode
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

function authUser(sessionUser) {
    return $l(function (d) {
        if (sessionUser) {
            userDao.findOne({token: sessionUser.token}, function (err, user) {
                d.resolve(user && user.isAdmin);
            });
        } else {
            d.resolve(false);
        }
    });
}

function authUserApi(req, res) {
    var sessionUser = req.session.user;
    authUser(sessionUser).then(function (d, r) {
        res.send(r ? {
            result: "OK",
            username: req.session.user.username,
            isAdmin: true
        } : {err: 'you have no right to post a article!'});
    });
}

module.exports = {
    encryptSession: encryptSession,
    authUser: authUser,
    authUserApi: authUserApi
};
