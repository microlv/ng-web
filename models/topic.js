/**
 * Created by Andy.Lv on 2014/12/23.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var topicSchema = new Schema({
    type: {type: String},
    authorId: {type: ObjectId},
    title: {type: String},
    content: {type: String},
    visitCount: {type: Number, default: 0},
    insertAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
});

mongoose.model('Topic', topicSchema);
