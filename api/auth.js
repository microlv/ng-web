/**
 * Created by Andy.Lv on 2014/12/26.
 */

'use strict';

var user = require('../dao').user;

module.exports = {
	login: function (req, res) {
		user.auth(req.body.username, req.body.password, function () {
			res.send('auth success');
		});
	}
};