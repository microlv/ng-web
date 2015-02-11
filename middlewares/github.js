/**
 * Created by Andy.Lv on 2015/1/13.
 */

'use strict';

var passport = require('passport');
var passportGithub = require('passport-github');
var GitHubStrategy = passportGithub.Strategy;
var config = require('../config');
var userDao = require('../dao').user;
var auth = require('./auth');
var $l = require('livejs');

function githubStrategy() {
    return new GitHubStrategy({
            clientID: process.env.GITHUB_CLIENT_ID || config.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET || config.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK || config.GITHUB_CALLBACK
        },
        function (accessToken, refreshToken, profile, done) {
            profile.token = accessToken;
            done(null, profile);
        }
    );
}
function githubAuth(config) {
    if (config) {
        return passport.authenticate('github', config);
    }
    return passport.authenticate('github');
}

function createUser(profile) {
    var user = {};
    user.username = profile.username;
    user.avatar = profile._json.avatar_url;
    user.email = profile.email;
    user.profileUrl = profile.profileUrl;
    user.provider = profile.provider;
    user.token = profile.token;
    return user;
}

function githubCallback(req, res, next) {
    // Successful authentication, redirect home.
    var profile = req.user;

    //currently only one admin user, and need set admin by use db tool.
    $l(function (d) {
        userDao.findOne({githubid: profile.id}, function (err, user) {
            if (err) {
                return next(err);
            }
            d.resolve(user);
        });
    }).then(function (d, user) {
        if (user) {
            var updateUser = createUser(profile);
            //set user as default not admin
            user.save(function (err) {
                if (err) {
                    return next(err);
                }
                d.resolve(updateUser);
            });
        } else {
            userDao.save(profile, function (err) {
                if (err) {
                    return next(err);
                }
                d.resolve(createUser(profile));
            });
        }
    }).then(function (d, user) {
        if (req.session) {
            req.session.user = user;
        }
        auth.encryptSession(user, res);
        res.redirect('back');
    });
}

module.exports = {
    githubStrategy: githubStrategy,
    githubAuth: githubAuth,
    githubCallback: githubCallback
};
