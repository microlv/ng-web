/**
 * Created by Andy.Lv on 2014/11/13.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('mainframeController', ['$scope', '$http', '$rootScope',
        function ($scope, $http, $rootScope) {
            //$scope.username = 'welcome';
            //$scope.isAdmin = false;
            //$scope.isAuth = false;
            $rootScope.systemUser = {
                username: 'welcome',
                isAuth: false
            };

            $http.get('/api/auth/authUser').then(function (res) {
                if (res.status === 200 && !res.data.err) {
                    //$scope.isAuth = true;
                    //$scope.isAdmin = res.data.isAdmin;
                    //$scope.username = res.data.username;
                    $rootScope.systemUser = {
                        username: res.data.username,
                        isAdmin: res.data.isAdmin,
                        isAuth: true
                    };
                }
            });
        }]);
})(angular);