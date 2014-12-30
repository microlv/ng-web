/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';
var user = require('../models').User;

module.exports = {
	auth: function (username, password, callback) {
		user.find({username: username, password: password}, callback);
	},
	create: function (config, callback) {
		user.create({
			username: 'andy.lv@live.com',
			password: 'test'
		});
	}
};