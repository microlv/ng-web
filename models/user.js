/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: {type: String},
    username: {type: String},
    email: {type: String},
    avatar: {type: String},
    profileUrl:{type: String},
    provider: {type: String}
});

mongoose.model('User', userSchema);