/**
 * Created by lva on 2014/12/17.
 */


(function (angular) {
    'use strict';

    var app = angular.module('app', ['ngMessage']);

    app.controller('controller1', ['ngMessage', '$scope', function (ngMsg, $scope) {

        ngMsg.register('demo.1', function (k) {
            console.log('demo.1 response');
        });

        ngMsg.on('demo.2', function (k) {
            console.log('demo.2 response');
        });
    }]);

    app.controller('controller2', ['ngMessage', '$scope', function (ngMsg, $scope) {
        $scope.click = function () {
            ngMsg.trigger('demo.1', [{a: 1}, {a: 2}]);
        };

        $scope.remove = function () {
            ngMsg.remove('demo.1');
            $scope.click();
        };

        ngMsg.on('directive.1', function (k) {
            console.log('directive.1 response');
        });
        ngMsg.on('directive.2', function (k) {
            console.log('directive.2 response');
        });
    }]);

    app.controller('controller3', ['demoFactory', function (demoFactory) {
        demoFactory.onMessage();
    }]);

})(angular);