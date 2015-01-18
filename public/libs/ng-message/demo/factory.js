/**
 * Created by Andy.Lv on 2015/1/15.
 */


(function (angular) {
    'use strict';

    angular.module('app').factory('demoFactory', ['ngMessage', function (ngMsg) {

        function onMessage() {
            ngMsg.on('demoFactoryOnMessage', function (d) {
                console.log('factory task 1');
                d.resolve();
            }).then(function (d) {
                console.log('factory task 2');
                d.resolve();
            }).series([
                function (d) {
                    console.log('series task 3');
                    d.resolve();
                }, function (d) {
                    console.log('series task 4');
                    d.resolve();
                }
            ], function (d) {
                console.log('series task 5');
            }).then(function () {
                console.log('I can\'t execute');
            });
        }

        return {
            onMessage: onMessage
        };
    }]);

})(angular);
