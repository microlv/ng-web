/**
 * Created by Andy.Lv on 2014/12/26.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('loginController', ['$scope', '$http',
        function ($scope, $http) {
            $scope.ok = function () {
                $http({
                    method: 'POST',
                    url: '/api/auth/reg',
                    data: {
                        username: $scope.username,
                        password: $scope.password
                    }
                }).then(function (res) {

                });
            };

            $scope.cancel = function () {
            };

        }]);

})(angular);