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


function setTokenForTest(req, res) {
    if (config.debug) {
        req.session.user = {
            "_id": "54cdf3f06014f5580bc34441",
            "provider": "github",
            "profileUrl": "https://github.com/microlv",
            "avatar": "https://avatars.githubusercontent.com/u/5182589?v=3",
            "username": "microlv",
            "githubid": "5182589",
            "__v": 0,
            "token": "a86ad7150367397ecf66ade2858ef798257aeb3a",
            "isAdmin": true
        };
    }
}

function authUser(req, res) {
    setTokenForTest(req, res);
    return $l(function (d) {
        if (req.session && req.session.user) {
            var sessionUser = req.session.user;
            userDao.findOne({token: sessionUser.token}, function (err, user) {
                d.resolve(err?false:(user && user.isAdmin));
            });
        }
    });
}

function authUserApi(req, res, next) {
    authUser(req, res).then(function (d, r) {
        if (r) {
            res.send({
                result: "OK",
                username: req.session.user.username,
                isAdmin: true
            });
        } else {
            res.send({err: 'you have no right to post a article!'});
        }
    });
}

module.exports = {
    encryptSession: encryptSession,
    authUser: authUser,
    authUserApi: authUserApi
};
