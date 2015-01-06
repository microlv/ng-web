/**
 * Created by Andy.Lv on 2014/12/23.
 */

'use strict';

var Topic = require('../models').Topic;

module.exports = {
	count: function (callback) {
		Topic.count({}, callback);
	}
};