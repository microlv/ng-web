/**
 * Created by Andy.Lv on 2014/12/22.
 */
'use strict';

var mongoose = require('mongoose');
var config = require('../config');
var user = require('./user');
var topic = require('./topic');

mongoose.connect(process.env.MONGOLAB_URI || config.dbconnect, function (err) {
    //if (err) throw err;
});

module.exports = {
    User: mongoose.model('User'),
    Topic: mongoose.model('Topic')
};