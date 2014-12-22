/**
 * Created by lva on 2014/12/17.
 */


(function (angular) {
    'use strict';

    var app = angular.module('app', ['ngMessage']);

    app.controller('controller1', ['ngMessage', '$scope', function (ngMessage, $scope) {
        $scope.fireMsg = function () {

        };
        ngMessage.register('1.register', function (k) {
            console.log('1.response1');
        });
        ngMessage.register('1.register', function (k) {
            console.log('1.response2');
        });
        ngMessage.register('1.testRemove1', function (k) {
            console.log('1.testRemove1');
        });
        ngMessage.register('1.testRemove1', function (k) {
            console.log('1.testRemove2');
        });
    }]);

    app.controller('controller2', ['ngMessage', '$scope', function (ngMessage, $scope) {
        $scope.fireMsg = function () {
            ngMessage.trigger('1.register', [{a: 1}, {a: 2}]);
        };

        $scope.remove = function () {
            ngMessage.remove('1.testRemove1');
            console.log(ngMessage.list());

        };

        console.log(ngMessage.list());
    }]);

})(angular);