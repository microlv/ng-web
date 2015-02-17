'use strict';

module.exports = {
    debug: true,
    dbconnect: 'mongodb://127.0.0.1/ng-web',
    session_secret: 'ng-web',
    auth_cookie_name: 'ng-web',

    //MONGOLAB_URI: 'mongodb://heroku_app33118649:96tbme73efvbvv1b6k9hacalf0@ds031681.mongolab.com:31681/heroku_app33118649',
    GITHUB_CLIENT_ID: '189974e64f55c71a791d',
    GITHUB_CLIENT_SECRET: 'a9bc4ec84e3e10995e22df3925d62974fb0bd244',
    GITHUB_CALLBACK: 'http://localhost:3000/api/auth/github/callback'
    //ROLLBAR_ACCESS_TOKEN: ''
};
