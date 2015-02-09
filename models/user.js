/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    githubid: {type: String},
    username: {type: String},
    email: {type: String},
    avatar: {type: String},
    profileUrl: {type: String},
    provider: {type: String},
    token: {type: String},
    isAdmin: {type: Boolean}
});

mongoose.model('User', userSchema);