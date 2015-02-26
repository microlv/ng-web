/**
 * Created by Andy.Lv on 2015/2/26.
 */
'use strict';

function requireHttps() {
    return function (req, res, next) {
        if (process.env.requireHttps && req.headers['x-forwarded-proto'] !== 'https') {
            console.log('require https');
            res.redirect('https://' + req.headers.host + req.path);
        }
        next();
    };
}


module.exports = {
    requireHttps: requireHttps
};
