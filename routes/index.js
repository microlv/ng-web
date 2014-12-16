/**
 * Created by Andy.Lv on 2014/11/13.
 */
var layout = require('./layout');
var templates = require('./templates');
var partials = require('./partials');

module.exports = function (app) {
    app.use('/', layout.index);
    app.use('/layout', layout.layout);
    app.use('/templates', templates);
    app.use('/partials', partials);
};