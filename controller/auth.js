/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';

var user = require('../dao').user;

module.exports = {
    login: function (req, res, next) {
        user.auth(req.body.username, req.body.password, function (err, docs) {
            if (err) {
                next(err);
            }
            res.send('auth success');
        });
    },
    reg: function (req, res, next) {
        console.log('');


        user.reg(req.body.username, req.body.password, function (err, docs) {
            if (err) {
                next(err);
            }
            res.send('auth success');
        });
    },
    github: function () {

    }
};