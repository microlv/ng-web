/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {type: String},
    username: {type: String},
    password: {type: String}
});

mongoose.model('User', userSchema);