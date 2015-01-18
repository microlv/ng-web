/**
 * Created by Andy.Lv on 2015/1/8.
 */


(function (angular) {
    'use strict';

    angular.module('platform').factory('platformHttpService', ['$http', '$q', function ($http, $q) {
        return {
            //login
            login: function (username, password) {
                return $http({
                    method: 'POST',
                    url: '/api/auth/reg',
                    data: {
                        username: username,
                        password: password
                    }
                });
            },

            getTopicDetail: function (category) {
                return $http.get('/api/topics/' + category);
            },
            getTopicGroup: function () {
                return $http.get('/api/topics/grouptopics');
            }
        };
    }]);
})(angular);
