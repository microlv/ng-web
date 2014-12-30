/**
 * Created by Andy.Lv on 2014/12/22.
 */
'use strict';

var mongoose = require('mongoose');
var config = require('../config');
var user = require('./user');

mongoose.connect(config.dbconnect, function (err) {

});

module.exports = {
	User: mongoose.model('User')
};