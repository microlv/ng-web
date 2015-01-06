/**
 * Created by Andy.Lv on 2014/12/23.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicSchema = new Schema({
	type: {type: String},

	update_at: {type: Date, default: Date.now}

});

mongoose.model('Topic', topicSchema);
