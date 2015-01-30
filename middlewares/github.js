/**
 * Created by Andy.Lv on 2015/1/13.
 */

'use strict';

var passport = require('passport');
var passportGithub = require('passport-github');
var GitHubStrategy = passportGithub.Strategy;
var config = require('../config');
var userDao = require('../dao').user;


function githubStrategy() {
    return new GitHubStrategy({
            clientID: process.env.GITHUB_CLIENT_ID || config.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET || config.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK || config.GITHUB_CALLBACK
        },
        function (accessToken, refreshToken, profile, done) {
            profile.accessToken = accessToken;
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

function githubCallback(req, res, next) {
    // Successful authentication, redirect home.
    var profile = req.user;

    userDao.findOne({id: profile.id}, function (err, user) {
        if (err) {
            return next(err);
        }
        // 当用户已经是 cnode 用户时，通过 github 登陆将会更新他的资料
        if (user) {
            user.username = profile.username;
            user.avatar = profile._json.avatar_url;

            userDao.save(function (err) {
                if (err) {
                    return next(err);
                }
                authMiddleWare.gen_session(user, res);
                return res.redirect('/');
            });
        } else {
            //// 如果用户还未存在，则建立新用户
            //req.session.profile = profile;
            //return res.redirect('/auth/github/new');
        }
    });
    //console.log(req.session.user);
    res.redirect('/');
}

module.exports = {
    githubStrategy: githubStrategy,
    githubAuth: githubAuth,
    githubCallback: githubCallback
};
