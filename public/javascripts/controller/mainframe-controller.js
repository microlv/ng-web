/**
 * Created by Andy.Lv on 2014/11/13.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('mainframeController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('/api/auth/authUser').then(function (res) {
                if (res.status === 200) {
                    $scope.isAdmin = res.data[0].isAdmin;
                }
            });
        }]);
})(angular);