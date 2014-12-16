/**
 * Created by Andy.Lv on 2014/11/13.
 */
//var layout = require('./layout');
//var templates = require('./templates');
//var partials = require('./partials');

var router = require('./router_api');

module.exports = function (app) {
    app.use('/', router.index);
    app.use('/layout', router.layout);
    app.use('/templates', router.templates);
    app.use('/partials', router.partials);
};