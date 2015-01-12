/**
 * Created by Andy.Lv on 2014/12/26.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('loginController', ['$scope', 'platformHttpService',
        function ($scope, platformHttpService) {
            $scope.ok = function () {
                platformHttpService.login($scope.username, $scope.password)
                    .then(function (res) {

                    });
            };
            $scope.cancel = function () {
            };
        }]);

})(angular);